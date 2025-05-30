"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generative_ai_1 = require("@google/generative-ai");
const router = (0, express_1.Router)();
const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new generative_ai_1.GoogleGenerativeAI(apiKey) : null;
router.post('/mcp', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield model.generateContent(userPrompt);
        const text = result.response.text();
        res.json({ reply: text });
    }
    catch (error) {
        console.error('[MCP ERROR]', error.message || error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.default = router;
