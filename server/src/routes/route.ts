import { router as ImageRoutes } from "./image.routes";
import { router as ContainerRoutes } from "./container.routes";
import { Router } from "express";
export const router = Router();
router.use("/image", ImageRoutes);
router.use("/container", ContainerRoutes);

export default router;
