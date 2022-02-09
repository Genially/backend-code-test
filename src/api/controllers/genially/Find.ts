import { Request, Response } from "express";
import FindGeniallyService from "../../../contexts/core/genially/application/FindGeniallyService";
import GeniallyNotExist from "../../../contexts/core/genially/domain/GeniallyNotExist";
import { repository } from "../../app";

export const findGenially = async (req: Request, res: Response) => {
  const service = new FindGeniallyService(repository);
  const id = req.params.id as string;

  const genially = await service.execute(id);

  if(!genially) {
    const error = new GeniallyNotExist(id);
    return res
      .status(404)
      .json({ message: error.message })
      .end();
  }

  const { id: geniallyId, name, description } = genially;

  res.status(200).json({
      id: geniallyId,
      name,
      description
  });
};

