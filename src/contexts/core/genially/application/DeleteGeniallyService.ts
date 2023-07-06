import Genially from "../domain/Genially";
import GeniallyNotExist from "../domain/GeniallyNotExist";
import GeniallyRepository from "../domain/GeniallyRepository";

export default class DeleteGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(id: string): Promise<Genially> {
    const genially = await this.repository.find(id);
    if (!genially) {
      throw new GeniallyNotExist(id);
    }
    genially.deleteFromDate(new Date());
    await this.repository.save(genially);
    return genially;
  }
}
