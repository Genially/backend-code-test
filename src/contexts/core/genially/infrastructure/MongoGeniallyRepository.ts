import { GeniallyServiceResponse } from "../application/models/GeniallyResponse";
import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";
import { GeniallySchema } from "../domain/GeniallySchema";

export default class MongoGeniallyRepository implements GeniallyRepository {

  async count(): Promise<number> {
    return await GeniallySchema.count();
  }

  async save(genially: Genially): Promise<void> {
    const existingGenially = await GeniallySchema.findOne<Genially>({ id: genially.id });

    if (!existingGenially) {
      const newGenially = new GeniallySchema();
      newGenially.id = genially.id;
      newGenially.name = genially.name;
      newGenially.description = genially.description;
      await newGenially.save();
    }
  }

  async find(id: string): Promise<GeniallyServiceResponse> {
    const genially = await GeniallySchema.findOne<Genially>({ id });
    return {
      id: genially.id,
      name: genially.name,
      description: genially.description,
      deletedAt: genially.deletedAt
    };
  }

  async findAll(): Promise<GeniallyServiceResponse[]> {
    const geniallys = await GeniallySchema.find<Genially>();
    return geniallys.map(g => ({
      id: g.id,
      name: g.name,
      description: g.description,
      deletedAt: g.deletedAt
    } as GeniallyServiceResponse));
  }

  async delete(id: string): Promise<void> {
    const geneally = await GeniallySchema.findOne({ id });
    if(geneally) {
      geneally.deletedAt = new Date();
      await geneally.save();
    }
  }
}
