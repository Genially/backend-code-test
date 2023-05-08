import { GeniallysCounter } from "../domain/GeniallysCounter ";
import GeniallysCounterNotInitialize from "../domain/GeniallysCounterNotInitialize";
import { GeniallysCounterRepository } from "../domain/GeniallysCounterRepository";

export class SearchGeniallysCounterService {
  constructor(private repository: GeniallysCounterRepository) {}

  public async execute(): Promise<GeniallysCounter> {
    const counter = await this.repository.search();
    if (!counter) {
      throw new GeniallysCounterNotInitialize();
    }
    return counter;
  }
}
