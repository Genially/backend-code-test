import { Request, Response } from "express";
import CountGeniallyService from "../../../contexts/core/genially/application/CountGeniallyService";
import { repository } from "../../app";

export const countGenially = async (req: Request, res: Response) => {
  const service = new CountGeniallyService(repository);
  const count = await service.execute();

  res.status(200).json({ count });
};

