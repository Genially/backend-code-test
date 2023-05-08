import { Request, Response } from "express";
import DeleteGeniallyService from "../../../contexts/core/genially/application/DeleteGeniallyService";

export class DeleteGeniallyController {
  constructor(private deleteService: DeleteGeniallyService) {}

  public async execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.deleteService.execute(id);
      res.status(200).send("deleted successful");
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}
