import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";

type CreateGeniallyServiceRequest = {
  id: Genially["id"];
  name: Genially["name"];
  description: Genially["description"];
};

export default class CreateGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(req: CreateGeniallyServiceRequest): Promise<Genially> {
    const { id, name, description } = req;

    const genially = new Genially(id, name, description);

    await this.repository.save(genially);

    return genially;
  }
}
