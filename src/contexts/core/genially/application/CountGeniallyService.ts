import GeniallyRepository from "../domain/GeniallyRepository";

export default class CountGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(): Promise<number> {
    return await this.repository.count();
  }
}
