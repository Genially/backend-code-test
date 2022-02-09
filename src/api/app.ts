import compression from "compression";
import express from "express";
import lusca from "lusca";
import { router } from "./controllers/Genially/Router";
import InMemoryGeniallyRepository from "../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";

// Controllers (route handlers)
import * as healthController from "./controllers/health";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

// Primary app routes
app.use("/api", router);
app.get("/", healthController.check);

export default app;
export const repository = new InMemoryGeniallyRepository();
