import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";
import { CreateGeniallyServiceRequest } from "./models/GeniallyRequest";
import { GeniallyServiceResponse } from "./models/GeniallyResponse";

export default class CreateGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(req: CreateGeniallyServiceRequest): Promise<GeniallyServiceResponse> {
    const { id, name, description } = req;

    const genially = new Genially(id, name, description);

    await this.repository.save(genially);

    return {
      id: genially.id,
      name: genially.name,
      description: genially.description,
      deletedAt: genially.deletedAt
    };
  }
}
