import { DomainEvent } from "./DomainEvent";
import { EventName } from "./InMemoryEventBus";

export interface Subscriber {
  subscribedTo(): EventName[];
  executeService(event: DomainEvent): Promise<void>;
}
