const Docker = require('dockerode');
var docker = new Docker({ socketPath: '//./pipe/docker_engine' });

const createContainer = async (image) => {
  try {
    const container = await docker.createContainer({
      Image: image,
      Tty: true,
    });
    return container;
  } catch (err) {
    throw new Error(`Failed to create container: ${err.message}`);
  }
};

const startContainer = async (containerId) => {
  try {
    const container = docker.getContainer(containerId);
    const data = await container.start();
    return data;
  } catch (err) {
    throw new Error(`Failed to start container: ${err.message}`);
  }
};

const stopContainer = async (containerId) => {
  try {
    const container = docker.getContainer(containerId);
    const data = await container.stop();
    return data;
  } catch (err) {
    throw new Error(`Failed to stop container: ${err.message}`);
  }
};

const listContainers = async () => {
  try {
    const containers = await docker.listContainers({ all: true });
    return containers;
  } catch (err) {
    throw new Error(`Failed to list containers: ${err.message}`);
  }
};

module.exports = {
  createContainer,
  startContainer,
  stopContainer,
  listContainers,
};
