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
exports.docker = void 0;
exports.createContainer = createContainer;
const dockerode_1 = __importDefault(require("dockerode"));
const docker = new dockerode_1.default({ socketPath: '//./pipe/docker_engine' });
exports.docker = docker;
function createContainer(image, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const images = yield docker.listImages();
        const imageExists = images.some(img => img.RepoTags && img.RepoTags.includes(image));
        if (!imageExists) {
            yield new Promise((resolve, reject) => {
                docker.pull(image, (err, stream) => {
                    if (err)
                        return reject(err);
                    docker.modem.followProgress(stream, onFinished, onProgress);
                    function onFinished(err) {
                        if (err)
                            reject(err);
                        else
                            resolve(true);
                    }
                    function onProgress(event) {
                        // Optional: handle progress events
                    }
                });
            });
        }
        const container = yield docker.createContainer({
            Image: image,
            name: name,
            Tty: true,
        });
        return container;
    });
}
