import { Router } from "express";
import { listImages } from "../controller/image.controller";

export const router = Router();

router.get("/all", listImages);
