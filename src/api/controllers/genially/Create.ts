import { Request, Response } from "express";
import CreateGeniallyService from "../../../contexts/core/genially/application/CreateGeniallyService";
import { CreateGeniallyServiceRequest } from "../../../contexts/core/genially/domain/GeniallyRequest";
import { repository } from "../../app";

export const createGenially = async (req: Request, res: Response) => {
  const body = req.body as CreateGeniallyServiceRequest;

  if (body.name.length < 3 || body.name.length > 20) return res.status(400).json({
    message: "The name of a genially cannot be empty and its length has to be from 3 to 20 characters."
  }).end();
  if (body.description.length < 125) return res.status(400).json({
    message: "The description of a genially is limited to 125 characters."
  }).end();

  const service = new CreateGeniallyService(repository);
  const genially = await service.execute(body);

  res.status(201).json(genially);
};
