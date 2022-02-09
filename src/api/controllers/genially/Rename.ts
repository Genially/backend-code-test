import { Request, Response } from "express";
import FindGeniallyService from "../../../contexts/core/genially/application/FindGeniallyService";
import RenameGeniallyService from "../../../contexts/core/genially/application/RenameGeniallyService";
import GeniallyNotExist from "../../../contexts/core/genially/domain/GeniallyNotExist";
import { CreateGeniallyServiceRequest } from "../../../contexts/core/genially/application/models/GeniallyRequest";
import { repository } from "../../app";

export const renameGenially = async (req: Request, res: Response) => {
  const findService = new FindGeniallyService(repository);
  const service = new RenameGeniallyService(repository);

  const id = req.params.id as string;
  const body = req.body as CreateGeniallyServiceRequest;

  if (body.name.length < 3 || body.name.length > 20) return res.status(400).json({
    message: "The name of a genially cannot be empty and its length has to be from 3 to 20 characters."
  }).end();

  const genially = await findService.execute(id);
  if(!genially) {
    const error = new GeniallyNotExist(id);
    return res
      .status(404)
      .json({ message: error.message })
      .end();
  }

  const newGenially = await service.execute(id, body.name);

  res.status(201).json(newGenially);
};

