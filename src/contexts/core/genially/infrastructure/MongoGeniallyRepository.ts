import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";
import { GeniallySchema } from "../domain/GeniallySchema";

export default class MongoGeniallyRepository implements GeniallyRepository {

  async save(genially: Genially): Promise<void> {
    await this.delete(genially.id);

    const newGenially = new GeniallySchema();
    newGenially.id = genially.id;
    newGenially.name = genially.name;
    newGenially.description = genially.description;

    await newGenially.save();
  }

  async find(id: string): Promise<Genially> {
    return await GeniallySchema.findById(id);
  }

  async findAll(): Promise<Genially[]> {
    const geniallys = await GeniallySchema.find<Genially>();
    return geniallys.map(g => ({
      id: g.id,
      name: g.name,
      description: g.description
    } as Genially));
  }

  async delete(id: string): Promise<void> {
    await GeniallySchema.deleteOne( { id });
  }
}
