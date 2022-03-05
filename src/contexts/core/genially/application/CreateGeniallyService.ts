import Genially from "../domain/Genially";
import { GeniallyDescription } from "../domain/GeniallyDescription";
import { GeniallyName } from "../domain/GeniallyName";
import GeniallyRepository from "../domain/GeniallyRepository";

type CreateGeniallyServiceRequest = {
  id: string;
  name: string;
  description: string;
};

export default class CreateGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(req: CreateGeniallyServiceRequest): Promise<Genially> {
    const { id, name, description } = req;

    const genially = new Genially(
      id,
      new GeniallyName(name),
      new GeniallyDescription(description)
    );

    await this.repository.save(genially);

    return genially;
  }
}
