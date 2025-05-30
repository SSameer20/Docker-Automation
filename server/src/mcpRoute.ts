import { Router, Request, Response } from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';

const router = Router();

const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

router.post('/mcp', async (req: Request, res: Response): Promise<void> => {
  try {
    if (!genAI) {
      res.status(500).json({ error: 'GEMINI_API_KEY not set on server' });
      return;
    }

    const userPrompt = req.body.prompt;
    if (!userPrompt) {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(userPrompt);
    const text = result.response.text();

    res.json({ reply: text });
  } catch (error: any) {
    console.error('[MCP ERROR]', error.message || error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
