import { GeniallyServiceResponse } from "../application/models/GeniallyResponse";
import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";

export default class InMemoryGeniallyRepository implements GeniallyRepository {
  private geniallys: Genially[] = [];

  async count(): Promise<number> {
    return this.geniallys.length;
  }

  async save(genially: Genially): Promise<void> {
    await this.delete(genially.id);
    this.geniallys.push(genially);
  }

  async find(id: string): Promise<GeniallyServiceResponse> {
    return this.geniallys.find((genially) => genially.id === id);
  }

  async findAll(): Promise<GeniallyServiceResponse[]> {
    return this.geniallys
    .filter((genially) => genially.isActive())
    .map(g => ({
      id: g.id,
      name: g.name,
      description: g.description,
      deletedAt: g.deletedAt
    }));
  }

  async delete(id: string): Promise<void> {
    const genially = this.geniallys.find((genially) => genially.id === id);

    genially?.deactive();
  }
}
