import Docker from "dockerode";

const docker = new Docker({
  host: "localhost",
  port: 2375,
});

export async function listContainers() {
  try {
    const containers = await docker.listContainers({ all: true });
    return containers;
  } catch (err) {
    console.error("Error listing containers:", err);
    return [];
  }
}
