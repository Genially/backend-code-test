import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";

export default class MongoGeniallyRepository implements GeniallyRepository {
  async save(genially: Genially): Promise<void> {
    await this.delete(genially.id);
  }

  async find(id: string): Promise<Genially> {
    return new Promise(res => res({id} as Genially));
  }

  async findAll(): Promise<Genially[]> {
    return new Promise(res => res([] as Genially[]));
  }

  async delete(id: string): Promise<void> {
    new Promise(res => res({id}));
  }
}
