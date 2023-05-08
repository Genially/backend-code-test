import { Request, Response } from "express";
import CreateGeniallyService from "../../../contexts/core/genially/application/CreateGeniallyService";

export class GeniallyPostController {
  constructor(private createGeniallyService: CreateGeniallyService) {}

  public async execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const genially = await this.createGeniallyService.execute({
        id,
        name,
        description,
      });

      res
        .status(201)
        .json({ id, name, description, createAt: genially.createdAt });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
