import { GeniallyServiceResponse } from "../application/models/GeniallyResponse";
import Genially from "./Genially";

interface GeniallyRepository {
  count(): Promise<number>;

  save(genially: Genially): Promise<void>;

  find(id: string): Promise<GeniallyServiceResponse>;

  findAll(): Promise<GeniallyServiceResponse[]>;

  delete(id: string): Promise<void>;
}

export default GeniallyRepository;
