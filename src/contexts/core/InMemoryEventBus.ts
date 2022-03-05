import { DomainEvent } from "./DomainEvent";
import { Subscriber } from "./Subscriber";

export type EventName = string;

export class InMemoryEventBus {
  private subscribersMap: Map<EventName, Subscriber[]>;

  public async publishEvent(event: DomainEvent): Promise<void> {
    const subscribersInBus = this.subscribersMap.get(event.eventName);
    if (subscribersInBus) {
      subscribersInBus.map((subscriber) => subscriber.executeService(event));
    }
  }

  public addSubscribers(subcribers: Subscriber[]): void {
    subcribers.map((subscriber) => this.registerSuncriber(subscriber));
  }

  private registerSuncriber(subscriber: Subscriber): void {
    const eventsNames = subscriber.subscribedTo();
    for (const name of eventsNames) {
      const subscribersMapRef = this.subscribersMap.get(name);
      if (subscribersMapRef) {
        subscribersMapRef.push(subscriber);
      } else {
        this.subscribersMap.set(name, [subscriber]);
      }
    }
  }
}
