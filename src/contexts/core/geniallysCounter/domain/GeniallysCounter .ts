import { GeniallysCounterTotal } from "./GeniallysCounterTotal";

export class GeniallysCounter {
  private id: number;
  private total: GeniallysCounterTotal;

  constructor(id: number, total: GeniallysCounterTotal) {
    this.id = id;
    this.total = total;
  }

  static initialize(): GeniallysCounter {
    const id = 1;
    return new GeniallysCounter(id, GeniallysCounterTotal.initializeIn0());
  }

  public increment() {
    this.total = this.total.incrementBy1();
  }
}
