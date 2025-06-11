import Dockerode from "dockerode";
import os from "os";

let dockerSocketPath: string;

if (os.platform() === "win32") {
  dockerSocketPath = "//./pipe/docker_engine";
} else {
  dockerSocketPath = "/var/run/docker.sock";
}

const instance = new Dockerode({ socketPath: dockerSocketPath });
if (!instance) {
  throw new Error(
    "Failed to create Dockerode instance. Please ensure Docker is running."
  );
}
export const docker = instance;
