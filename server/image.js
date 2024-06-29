const Docker = require('dockerode');
const docker = new Docker();

const listImages = (callback) => {
  docker.listImages((err, images) => {
    if (err) {
      console.error('Error listing images:', err);
      return callback(err);
    }

    // Transform images data if needed
    const transformedImages = images.map(image => ({
      Id: image.Id,
      RepoTags: image.RepoTags,
      Created: new Date(image.Created * 1000).toLocaleString(),
    }));

    callback(null, transformedImages);
  });
};

module.exports = { listImages };
