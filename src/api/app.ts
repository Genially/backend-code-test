import compression from "compression";
import express from "express";
import lusca from "lusca";
import mongoose from "mongoose";
import { router } from "./controllers/genially/Router";
import InMemoryGeniallyRepository from "../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";

// Controllers (route handlers)
import * as healthController from "./controllers/health";
import MongoGeniallyRepository from "../contexts/core/genially/infrastructure/MongoGeniallyRepository";

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

async function connect() {
  await mongoose.connect("mongodb://localhost:27017/documents");
}

if(process.env.ENVIRONMENT === "prod") connect();

export const repository = process.env.ENVIRONMENT === "test"
  ? new InMemoryGeniallyRepository()
  : new MongoGeniallyRepository;
