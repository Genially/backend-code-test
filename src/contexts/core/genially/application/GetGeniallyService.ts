import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";
import { GeniallyServiceResponse } from "../domain/GeniallyResponse";

export default class GetGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(): Promise<GeniallyServiceResponse[]> {
    const geniallys = await this.repository.findAll();
    return geniallys.map(({id , name, description}: Genially) => ({
      id,
      name,
      description
    }));
  }
}
