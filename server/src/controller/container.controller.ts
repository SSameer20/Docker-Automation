import { Request, RequestHandler, Response } from "express";
import { docker } from "../config/docker.config";
import { Status } from "../utils/status.util";

/**
 * @title List All Containers
 * @description
 * This method retrieves a list of all Docker containers on the host, including both running and stopped containers.
 * It is useful for displaying the current state of all containers in the system, which is essential for management dashboards,
 * monitoring tools, or any automation that needs to know what containers exist and their statuses.
 *
 * Developers can modify the filter options in `docker.listContainers({ all: true })` to return only running containers
 * (by setting `all: false`), or to filter by specific labels, status, or other Docker query parameters.
 *
 * @method GET
 * @params none
 * @req format none
 * @res format { containers: Array }
 *   - Each container object includes details such as ID, image, command, created time, status, ports, and names.
 *   - Example response:
 *     {
 *       "containers": [
 *         {
 *           "Id": "8dfafdbc3a40",
 *           "Image": "ubuntu:latest",
 *           "Command": "/bin/bash",
 *           "Created": 1367854155,
 *           "Status": "Exited (0) 1 second ago",
 *           "Ports": [],
 *           "Names": ["/boring_feynman"]
 *         },
 *       ]
 *     }
 */
export const containerListAll = (async (req: Request, res: Response) => {
  try {
    const containers = await docker.listContainers({ all: true });
    res.status(Status.OK).json({ containers });
  } catch (err) {
    res
      .status(Status.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to list containers" });
  }
}) as RequestHandler;

/**
 * @title Create and Start a Docker Container
 * @description
 * This method creates a new Docker container from a specified image and starts it.
 * It is useful for dynamically provisioning containers based on user input or application requirements.
 *
 * Developers can modify the `image` parameter in the request body to specify different Docker images,
 * and adjust the `Cmd` array to change the command that runs inside the container.
 *
 * @method POST
 * @params { image: string }
 * @req format { image: "ubuntu:latest" }
 * @res format { containerId: string }
 *   - Returns the ID of the newly created and started container.
 */
export const containerCreate = (async (req: Request, res: Response) => {
  try {
    const { image }: { image: string | null } = req.body;
    if (!image) {
      return res
        .status(Status.BAD_REQUEST)
        .json({ error: "Image is required" });
    }

    // Pull the image (if not present locally)
    const stream = await docker.pull(image);
    await new Promise<void>((resolve, reject) => {
      docker.modem.followProgress(stream, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    // Create the container
    const container = await docker.createContainer({
      Image: image,
      Tty: true,
    });

    // Start the container
    await container.start();

    return res.status(Status.CREATED).json({ containerId: container.id });
  } catch (err: any) {
    // Handle image not found
    if (err.statusCode === 404) {
      return res.status(Status.NOT_FOUND).json({ error: "Image not found." });
    }
    // Log error for debugging
    console.error("Failed to create/start container:", err);
    res
      .status(Status.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to create container" });
  }
}) as RequestHandler;

/**
 * @title Start a Docker Container
 * @description
 * This method starts an existing Docker container by its ID.
 * It is useful for resuming operations in a container that has been previously created but not running.
 * Developers can modify the request body to include different container IDs to start various containers.
 * @method POST
 * @params { containerId: string }
 * @req format { containerId: "8dfafdbc3a40" }
 * @res format { message: string }
 *  - Returns a message indicating the container has been started.
 *  - Example response: { "message": "Container started" }
 * @error
 *  - If the container is already running, it returns a message indicating that.
 *  - If the container cannot be started, it returns a 500 status with an error message.
 */
export const containerStart = (async (req: Request, res: Response) => {
  try {
    const { containerId } = req.body;
    if (!containerId) {
      return res.status(Status.BAD_REQUEST).send({
        error: "Container ID is required",
      });
    }
    const container = docker.getContainer(containerId);
    await container.start();
    res.status(Status.OK).json({ message: "Container started" });
  } catch (err: any) {
    if (err.statusCode === 304) {
      return res.json({ message: "Container already running" });
    }
    res
      .status(Status.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to start container" });
  }
}) as RequestHandler;

/**
 * @title Stop a Docker Container
 * @description
 * This method stops a running Docker container by its ID.
 * It is useful for gracefully shutting down containers that are no longer needed or to free up resources.
 * Developers can modify the request body to include different container IDs to stop various containers.
 *
 * @method POST
 * @params { containerId: string }
 * @req format { containerId: "8dfafdbc3a40" }
 * @res format { message: string }
 *  - Returns a message indicating the container has been stopped.
 *  - Example response: { "message": "Container stopped" }
 * @error
 *  - If the container cannot be stopped, it returns a 500 status with an error message.
 */
export const containerStop = (async (req: Request, res: Response) => {
  try {
    const { containerId } = req.body;
    if (!containerId) {
      return res
        .status(Status.BAD_REQUEST)
        .json({ error: "Container ID is required" });
    }
    const container = docker.getContainer(containerId);
    await container.stop();
    res.status(Status.OK).send({ message: "Container stopped" });
  } catch (err) {
    res
      .status(Status.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to stop container" });
  }
}) as RequestHandler;
