import { Request, Response, Router } from "express";
import CreateGeniallyService from "../../contexts/core/genially/application/CreateGeniallyService";
import DeleteGeniallyService from "../../contexts/core/genially/application/DeleteGeniallyService";
import RenameGeniallyService from "../../contexts/core/genially/application/RenameGeniallyService";
import InMemoryGeniallyRepository from "../../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";
import { DeleteGeniallyController } from "./controllers/DeleteGeniallyController";
import { GeniallyPostController } from "./controllers/GeniallyPostController";
import { RenameGeniallyController } from "./controllers/RenameGeniallyController";

export function registerGenialyRouter(): Router {
  const geniallyRouter = Router();

  const geniallyRepository = new InMemoryGeniallyRepository();

  //Create Genially Router
  const createGeniallyService = new CreateGeniallyService(geniallyRepository);
  const genialyPostControler = new GeniallyPostController(
    createGeniallyService
  );
  geniallyRouter.post("/genially/:id", (req: Request, res: Response) =>
    genialyPostControler.execute(req, res)
  );

  const deleteGeniallyService = new DeleteGeniallyService(geniallyRepository);
  const deleteControler = new DeleteGeniallyController(deleteGeniallyService);
  geniallyRouter.delete("/genially/:id", (req: Request, res: Response) =>
    deleteControler.execute(req, res)
  );

  const renameGeniallyService = new RenameGeniallyService(geniallyRepository);
  const renameControler = new RenameGeniallyController(renameGeniallyService);
  geniallyRouter.put("/genially/rename/:id", (req: Request, res: Response) =>
    renameControler.execute(req, res)
  );

  return geniallyRouter;
}
