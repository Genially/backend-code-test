import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";
import { GeniallyServiceResponse } from "../domain/GeniallyResponse";

export default class RenameGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(id: string, name: string): Promise<GeniallyServiceResponse> {

    const genially = await this.repository.find(id);
    const newGenially = new Genially(id, name, genially.description);

    await this.repository.save(newGenially);

    return {
      id: newGenially.id,
      name: newGenially.name,
      description: newGenially.description
    } as GeniallyServiceResponse;
  }
}
