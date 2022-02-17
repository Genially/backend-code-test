import { Response, Request } from "express";
import { GeniallyPresenter } from "../../contexts/core/genially/adapters/GeniallyPresenter";
import CreateGeniallyService from "../../contexts/core/genially/application/CreateGeniallyService";
import GeniallyNotCreate from "../../contexts/core/genially/domain/GeniallyNotCreate";
import InMemoryGeniallyRepository from "../../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";

export const create = async (req: Request, res: Response) => {
  const service = new CreateGeniallyService(new InMemoryGeniallyRepository());

  try {
    const genially = await service.execute(req.body);

    res.status(201).send(new GeniallyPresenter(genially).toJSON());
  } catch (e) {
    if (e instanceof GeniallyNotCreate) {
      return res.status(400).send({
        message: e.message,
      });
    }

    return res.status(500).send();
  }
};
