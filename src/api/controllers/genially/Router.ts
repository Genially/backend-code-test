import express from "express";
import { createGenially } from "./Create";
import { getGenially } from "./Get";

export const router = express.Router();

router.get("/genially", getGenially);
router.post("/genially", createGenially);

