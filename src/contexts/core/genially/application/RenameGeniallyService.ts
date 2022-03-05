import Genially from "../domain/Genially";
import { GeniallyName } from "../domain/GeniallyName";
import GeniallyNotExist from "../domain/GeniallyNotExist";
import GeniallyRepository from "../domain/GeniallyRepository";

export default class RenameGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(id: string, newName: string): Promise<Genially> {
    const genially = await this.repository.find(id);
    if (!genially) {
      throw new GeniallyNotExist(id);
    }
    genially.rename(new GeniallyName(newName));
    await this.repository.save(genially);
    return genially;
  }
}
