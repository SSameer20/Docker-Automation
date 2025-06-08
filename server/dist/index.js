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
const cors_1 = __importDefault(require("cors"));
const dockerode_1 = __importDefault(require("dockerode"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const docker = new dockerode_1.default({ socketPath: "//./pipe/docker_engine" });
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get("/images", ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const images = yield docker.listImages({ all: true });
        res.json({ images });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to list images" });
    }
})));
app.get("/containers", ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const containers = yield docker.listContainers({ all: true });
        res.json({ containers });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to list containers" });
    }
})));
app.post("/create", ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { image } = req.body;
    try {
        const stream = yield docker.pull(image);
        yield new Promise((resolve, reject) => {
            docker.modem.followProgress(stream, (err) => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
        const container = yield docker.createContainer({
            Image: image,
            Cmd: ["sleep", "3600"],
            Tty: true,
        });
        yield container.start();
        res.json({ containerId: container.id });
    }
    catch (err) {
        if (err.statusCode === 404) {
            return res.status(404).json({ error: "Image not found." });
        }
        res.status(500).json({ error: "Failed to create container" });
    }
})));
app.post("/start", ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { containerId } = req.body;
    try {
        const container = docker.getContainer(containerId);
        yield container.start();
        res.json({ message: "Container started" });
    }
    catch (err) {
        if (err.statusCode === 304) {
            return res.json({ message: "Container already running" });
        }
        res.status(500).json({ error: "Failed to start container" });
    }
})));
app.post("/stop", ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { containerId } = req.body;
    try {
        const container = docker.getContainer(containerId);
        yield container.stop();
        res.json({ message: "Container stopped" });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to stop container" });
    }
})));
app.listen(5000, () => {
    console.log("🚀 Docker API server running at http://localhost:5000");
});
