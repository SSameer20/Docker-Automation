import Docker from 'dockerode';

const docker = new Docker({ socketPath: '//./pipe/docker_engine' });

export const createContainer = async (image: string, name: string) => {
  return await docker.createContainer({
    Image: image,
    name,
    Tty: true,
  });
};

export const startContainer = async (id: string) => {
  const container = docker.getContainer(id);
  await container.start();
};

export const stopContainer = async (id: string) => {
  const container = docker.getContainer(id);
  await container.stop();
};

export const removeContainer = async (id: string) => {
  const container = docker.getContainer(id);
  await container.remove({ force: true });
};

export const listContainers = async () => {
  return await docker.listContainers({ all: true });
};
