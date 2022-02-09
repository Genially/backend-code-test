import express, { Request, Response } from "express";
import DeleteGeniallyService from "../../../contexts/core/genially/application/DeleteGeniallyService";
import FindGeniallyService from "../../../contexts/core/genially/application/FindGeniallyService";
import GeniallyNotExist from "../../../contexts/core/genially/domain/GeniallyNotExist";
import { repository } from "../../app";
export const router = express.Router();

export const deleteGenially = async (req: Request, res: Response) => {
  const deleteService = new DeleteGeniallyService(repository);
  const getService = new FindGeniallyService(repository);

  const id = req.params.id as string;
  const genially = await getService.execute(id);

  if(!genially) {
    const error = new GeniallyNotExist(id);
    return res
      .status(404)
      .json({ message: error.message })
      .end();
  }

  await deleteService.execute(id);

  res.status(204).json(genially);
};
