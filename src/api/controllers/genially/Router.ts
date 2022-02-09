import express from "express";
import { createGenially } from "./Create";
import { getGenially } from "./Get";
import { deleteGenially } from "./Delete";
import { findGenially } from "./Find";
import { renameGenially } from "./Rename";

export const router = express.Router();

router.get("/genially", getGenially);
router.post("/genially", createGenially);
router.get("/genially/:id", findGenially);
router.delete("/genially/:id", deleteGenially);
router.patch("/genially/:id", renameGenially);
