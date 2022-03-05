import { Request, Response } from "express";
import { SearchGeniallysCounterService } from "../../../contexts/core/geniallysCounter/application/SearchGeniallysCounterService";

export class GeniallysCounterGetController {
  constructor(private searchCounterService: SearchGeniallysCounterService) {}

  public async execute(req: Request, res: Response) {
    try {
      const counter = await this.searchCounterService.execute();
      res.status(200).json({ totalGeniallys: counter });
    } catch (error) {
      res.status(400).json({ errorMesagge: error.message });
    }
  }
}
