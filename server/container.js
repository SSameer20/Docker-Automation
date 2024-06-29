// container.js

const Docker = require('dockerode');
const docker = new Docker();

const createContainer = (image, callback) => {
  docker.createContainer({
    Image: image,
    Tty: true,
  }, (err, container) => {
    if (err) return callback(err);
    callback(null, container);
  });
};

const startContainer = (containerId, callback) => {
  const container = docker.getContainer(containerId);
  container.start((err, data) => {
    if (err) return callback(err);
    callback(null, data);
  });
};

const stopContainer = (containerId, callback) => {
  const container = docker.getContainer(containerId);
  container.stop((err, data) => {
    if (err) return callback(err);
    callback(null, data);
  });
};

const listContainers = (callback) => {
  docker.listContainers({ all: true }, (err, containers) => {
    if (err) return callback(err);
    callback(null, containers);
  });
};

module.exports = {
  createContainer,
  startContainer,
  stopContainer,
  listContainers
};
