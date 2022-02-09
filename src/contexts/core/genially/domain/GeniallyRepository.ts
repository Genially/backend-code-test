import Genially from "./Genially";

interface GeniallyRepository {
  count(): Promise<number>;

  save(genially: Genially): Promise<void>;

  find(id: string): Promise<Genially>;

  findAll(): Promise<Genially[]>;

  delete(id: string): Promise<void>;
}

export default GeniallyRepository;
