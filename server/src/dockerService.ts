import Docker from 'dockerode';

const docker = new Docker({ socketPath: '//./pipe/docker_engine' });

export async function createContainer(image: string, name?: string) {
  const images = await docker.listImages();
  const imageExists = images.some(img =>
    img.RepoTags && img.RepoTags.includes(image)
  );

  if (!imageExists) {
    await new Promise((resolve, reject) => {
      docker.pull(image, (err: Error | null, stream: NodeJS.ReadableStream) => {
        if (err) return reject(err);
        docker.modem.followProgress(stream, onFinished, onProgress);

        function onFinished(err: Error | null) {
          if (err) reject(err);
          else resolve(true);
        }

        function onProgress(event: any) {
          // Optional: handle progress events
        }
      });
    });
  }

  const container = await docker.createContainer({
    Image: image,
    name: name,
    Tty: true,
  });

  return container;
}

export { docker };
