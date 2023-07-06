import { Request, Response } from "express";
import RenameGeniallyService from "../../../contexts/core/genially/application/RenameGeniallyService";

export class RenameGeniallyController {
  constructor(private renameService: RenameGeniallyService) {}

  public async execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      await this.renameService.execute(id, name);
      res.status(200).send("rename successful");
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}
