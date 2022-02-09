import GeniallyRepository from "../domain/GeniallyRepository";
import { GeniallyServiceResponse } from "./models/GeniallyResponse";

export default class GetGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(): Promise<GeniallyServiceResponse[]> {
    return await this.repository.findAll();
  }
}
