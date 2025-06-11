import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { corsOptions } from "./utils/cors.utils";
import router from "./routes/route";
dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  const environment = process.env.NODE_ENV || "development";

  try {
    if (environment === "development") {
      console.log(
        `Development Server is running on port http://localhost:${PORT}`
      );
    } else if (environment === "test") {
      console.log(`Test Server is running on port http://localhost:${PORT}`);
    } else {
      console.log(`Server is running`);
    }
  } catch (error) {
    console.error("Error starting the server:", error);
  }
});
