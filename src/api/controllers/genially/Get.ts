import { Request, Response } from "express";
import GetGeniallyService from "../../../contexts/core/genially/application/GetGeniallyService";
import { repository } from "../../app";

export const getGenially = async (req: Request, res: Response) => {
  const service = new GetGeniallyService(repository);
  const geniallys = await service.execute();

  res.status(200).json(geniallys);
};

