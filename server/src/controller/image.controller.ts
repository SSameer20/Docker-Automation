import { Request, RequestHandler, Response } from "express";
import { docker } from "../config/docker.config";

/**
 * @title List Docker Images
 * @description
 * This method retrieves a list of all Docker images available on the host system.
 * It is useful for displaying the current state of images in the system,
 * which is essential for management dashboards, monitoring tools, or any automation that needs to know what images exist.
 * Developers can modify the filter options in `docker.listImages({ all: true })` to return only specific images,
 * such as those with certain labels or tags.
 * * @method GET
 * @params none
 * @req format none
 * @res format { images: Array }
 *   - Each image object includes details such as ID, repository, tag, and size.
 *  - Example response:
 *    {
 *     "images": [
 *      {
 *       "Id": "sha256:1234567890abcdef",
 *      "RepoTags": ["ubuntu:latest"],
 *      "Size": 12345678,
 *      "Created": 1622547800
 *      }
 *     ]
 *  }
 * @returns {Promise<void>}
 * @throws {Error} If the Docker API fails to list images.
 * This method is asynchronous and returns a promise that resolves when the images are successfully retrieved.
 *
 *
 */
export const listImages = (async (req: Request, res: Response) => {
  try {
    const images = await docker.listImages({ all: true });
    res.json({ images });
  } catch (err) {
    res.status(500).json({ error: "Failed to list images" });
  }
}) as RequestHandler;
