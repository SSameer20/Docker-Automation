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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dockerController_1 = require("./dockerController");
const dockerService_1 = require("./dockerService");
const router = express_1.default.Router();
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { image, name } = req.body;
    try {
        const container = yield (0, dockerService_1.createContainer)(image, name);
        res.json({ id: container.id });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}));
router.post('/start/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, dockerController_1.startContainer)(req.params.id);
        res.json({ status: 'started' });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}));
router.post('/stop/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, dockerController_1.stopContainer)(req.params.id);
        res.json({ status: 'stopped' });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}));
router.delete('/remove/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, dockerController_1.removeContainer)(req.params.id);
        res.json({ status: 'removed' });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}));
router.get('/list', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const containers = yield (0, dockerController_1.listContainers)();
        res.json(containers);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}));
exports.default = router;
