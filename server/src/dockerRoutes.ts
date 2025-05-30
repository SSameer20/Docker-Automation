import express from 'express';
import {
  startContainer,
  stopContainer,
  removeContainer,
  listContainers,
} from './dockerController';
import { createContainer } from './dockerService';

const router = express.Router();

router.post('/create', async (req, res) => {
  const { image, name } = req.body;
  try {
    const container = await createContainer(image, name);
    res.json({ id: container.id });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
});


router.post('/start/:id', async (req, res) => {
  try {
    await startContainer(req.params.id);
    res.json({ status: 'started' });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
});

router.post('/stop/:id', async (req, res) => {
  try {
    await stopContainer(req.params.id);
    res.json({ status: 'stopped' });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
});

router.delete('/remove/:id', async (req, res) => {
  try {
    await removeContainer(req.params.id);
    res.json({ status: 'removed' });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
});

router.get('/list', async (_, res) => {
  try {
    const containers = await listContainers();
    res.json(containers);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
});

export default router;
