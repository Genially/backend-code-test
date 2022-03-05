export class GeniallysCounterTotal {
  private value: number;
  constructor(total: number) {
    this.value = total;
  }

  static initializeIn0(): GeniallysCounterTotal {
    return new GeniallysCounterTotal(0);
  }
  public incrementBy1(): GeniallysCounterTotal {
    return new GeniallysCounterTotal(this.value + 1);
  }
}
