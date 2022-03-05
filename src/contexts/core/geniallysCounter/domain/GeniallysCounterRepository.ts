import { GeniallysCounter } from "./GeniallysCounter ";

export interface GeniallysCounterRepository {
  save(counter: GeniallysCounter): Promise<void>;
  search(): Promise<GeniallysCounter | null | undefined>;
}
