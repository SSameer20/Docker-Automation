import express, { Request, Response, RequestHandler } from "express";
import cors from "cors";
import Docker from "dockerode";
import bodyParser from "body-parser";

const app = express();
const docker = new Docker({ socketPath: "//./pipe/docker_engine" });

app.use(cors());
app.use(bodyParser.json());

app.get("/images", (async (req: Request, res: Response) => {
  try {
    const images = await docker.listImages({ all: true });
    res.json({ images });
  } catch (err) {
    res.status(500).json({ error: "Failed to list images" });
  }
}) as RequestHandler);

app.get("/containers", (async (req: Request, res: Response) => {
  try {
    const containers = await docker.listContainers({ all: true });
    res.json({ containers });
  } catch (err) {
    res.status(500).json({ error: "Failed to list containers" });
  }
}) as RequestHandler);

app.post("/create", (async (req: Request, res: Response) => {
  const { image } = req.body;
  try {
    const stream = await docker.pull(image);
    await new Promise<void>((resolve, reject) => {
      docker.modem.followProgress(stream, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    const container = await docker.createContainer({
      Image: image,
      Cmd: ["sleep", "3600"],
      Tty: true,
    });
    await container.start();
    res.json({ containerId: container.id });
  } catch (err: any) {
    if (err.statusCode === 404) {
      return res.status(404).json({ error: "Image not found." });
    }
    res.status(500).json({ error: "Failed to create container" });
  }
}) as RequestHandler);

app.post("/start", (async (req: Request, res: Response) => {
  const { containerId } = req.body;
  try {
    const container = docker.getContainer(containerId);
    await container.start();
    res.json({ message: "Container started" });
  } catch (err: any) {
    if (err.statusCode === 304) {
      return res.json({ message: "Container already running" });
    }
    res.status(500).json({ error: "Failed to start container" });
  }
}) as RequestHandler);

app.post("/stop", (async (req: Request, res: Response) => {
  const { containerId } = req.body;
  try {
    const container = docker.getContainer(containerId);
    await container.stop();
    res.json({ message: "Container stopped" });
  } catch (err) {
    res.status(500).json({ error: "Failed to stop container" });
  }
}) as RequestHandler);

app.listen(5000, () => {
  console.log("🚀 Docker API server running at http://localhost:5000");
});
