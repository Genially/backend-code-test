import { GeniallysCounter } from "../domain/GeniallysCounter ";
import { GeniallysCounterRepository } from "../domain/GeniallysCounterRepository";

export class IncrementGeniallysCounter {
  constructor(private repository: GeniallysCounterRepository) {}

  public async execute(): Promise<GeniallysCounter> {
    let geniallysCounter = await this.repository.search();

    if (!geniallysCounter) {
      geniallysCounter = this.initilizeCounterIn0();
    }

    geniallysCounter.increment();
    await this.repository.save(geniallysCounter);
    return geniallysCounter;
  }

  private initilizeCounterIn0(): GeniallysCounter {
    return GeniallysCounter.initialize();
  }
}
