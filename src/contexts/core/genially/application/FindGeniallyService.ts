import GeniallyRepository from "../domain/GeniallyRepository";
import { GeniallyServiceResponse } from "./models/GeniallyResponse";

export default class FindGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(geniallyId: string): Promise<GeniallyServiceResponse> {
    return await this.repository.find(geniallyId);

  }
}
