import mongoose from "mongoose";

const geniallySchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String
});

export const GeniallySchema = mongoose.model("Genially", geniallySchema);
