import GeniallyRepository from "../domain/GeniallyRepository";

export default class CountGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(): Promise<number> {
    const geniallies = await this.repository.findAll();
    return geniallies.length;
  }
}
