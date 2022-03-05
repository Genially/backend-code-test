import { GeniallysCounter } from "../domain/GeniallysCounter ";
import { GeniallysCounterRepository } from "../domain/GeniallysCounterRepository";

export class InMemoryGeniallysCounterRepository
  implements GeniallysCounterRepository
{
  private geniallysCounter: GeniallysCounter;

  async save(geniallysCounter: GeniallysCounter): Promise<void> {
    this.geniallysCounter = geniallysCounter;
  }

  async search(): Promise<GeniallysCounter | null | undefined> {
    return this.geniallysCounter;
  }
}
