import { Request, Response, Router } from "express";
import { SearchGeniallysCounterService } from "../../contexts/core/geniallysCounter/application/SearchGeniallysCounterService";
import { GeniallysCounterGetController } from "./controller/GeniallysCounterGetController";
import { geniallysCounterRepository } from "./subcribersDomainEvents";

export function registerCounterGenialysRouter(): Router {
  const counterRouter = Router();

  //Create Counter Genially Router
  const counterController = new GeniallysCounterGetController(
    new SearchGeniallysCounterService(geniallysCounterRepository)
  );
  counterRouter.get("/counter-geniallys/", (req: Request, res: Response) =>
    counterController.execute(req, res)
  );

  return counterRouter;
}
