import { IncrementGeniallysCounter } from "../../contexts/core/geniallysCounter/application/IncrementGeniallysCounter";
import { IncrementGeniallyWhenGenialyCreated } from "../../contexts/core/geniallysCounter/application/IncrementGeniallyWhenGenialyCreated";
import { InMemoryGeniallysCounterRepository } from "../../contexts/core/geniallysCounter/infrastructure/InMemoryGeniallysCounterRepository";
import { InMemoryEventBus } from "../../contexts/core/InMemoryEventBus";

export function registerSubscribersGeniallysCounter(
  eventBus: InMemoryEventBus
): void {
  const geniallysCounterRepository = new InMemoryGeniallysCounterRepository();
  const incrementCounterGeniallyService = new IncrementGeniallysCounter(
    geniallysCounterRepository
  );
  const incrementGeniallysCounterSubscriber =
    new IncrementGeniallyWhenGenialyCreated(incrementCounterGeniallyService);

  eventBus.addSubscribers([incrementGeniallysCounterSubscriber]);
}
