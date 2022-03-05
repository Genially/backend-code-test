import { GeniallyCreatedDomainEvent } from "../../genially/domain/GeniallyCreatedDomainEvent";
import { EventName } from "../../InMemoryEventBus";
import { Subscriber } from "../../Subscriber";
import { IncrementGeniallysCounter } from "./IncrementGeniallysCounter";

export class IncrementGeniallyWhenGenialyCreated implements Subscriber {
  constructor(private incrementCounter: IncrementGeniallysCounter) {}

  subscribedTo(): EventName[] {
    return ["genially.created"];
  }
  async executeService(event: GeniallyCreatedDomainEvent): Promise<void> {
    await this.incrementCounter.execute();
  }
}
