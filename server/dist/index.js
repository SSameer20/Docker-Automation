"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dockerRoutes_1 = __importDefault(require("./dockerRoutes"));
const mcpRoute_1 = __importDefault(require("./mcpRoute"));
const app = (0, express_1.default)(); // ✅ Declare app before using it
const port = 5000;
// ✅ Enable CORS
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// ✅ Use your routes
app.use('/', dockerRoutes_1.default);
app.use('/', mcpRoute_1.default); // Place this after dockerRoutes
app.use('/api', mcpRoute_1.default);
app.listen(port, () => {
    console.log(`Docker Automation API running at http://localhost:${port}`);
});
