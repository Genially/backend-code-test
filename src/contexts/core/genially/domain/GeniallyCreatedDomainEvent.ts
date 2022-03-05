import { DomainEvent } from "../../DomainEvent";

export class GeniallyCreatedDomainEvent extends DomainEvent {
  static EVENT_NAME = "genially.created";
  constructor(entityCreatorId: string) {
    super(GeniallyCreatedDomainEvent.EVENT_NAME, entityCreatorId);
  }
}
