import { GeniallysCounter } from "../domain/GeniallysCounter ";
import { GeniallysCounterRepository } from "../domain/GeniallysCounterRepository";

export class IncrementGeniallysCounter {
  constructor(private repository: GeniallysCounterRepository) {}

  public async execute(): Promise<GeniallysCounter> {
    console.log("evento: genially created, react: CounterGeniallyIncrement");
    let geniallysCounter = await this.repository.search();

    if (!geniallysCounter) {
      geniallysCounter = this.initilizeCounterIn0();
    }

    geniallysCounter.increment();
    await this.repository.save(geniallysCounter);
    console.log(await this.repository.search());
    return geniallysCounter;
  }

  private initilizeCounterIn0(): GeniallysCounter {
    return GeniallysCounter.initialize();
  }
}
