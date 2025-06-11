import { NextFunction, Request, RequestHandler, Response } from "express";
import { Status } from "../utils/status.util";

const environment = process.env.NODE_ENV || "development";
export const UserMiddleware = ((
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (environment === "development") {
      console.log(`In Development mode bypassing user auth middleware`);
      next();
    }
  } catch (error) {
    console.log("Error in UserMiddleware:", error);
    res.status(Status.INTERNAL_SERVER_ERROR).json({
      error: "Internal Server Error",
      message: "An error occurred in the user middleware",
    });
  }
}) as RequestHandler;
