export class DomainEvent {
  readonly eventName: string;
  readonly ocurredOn: Date;
  readonly eventCreatorEntityId: string;
  constructor(name: string, entityCreatorId: string, ocurredOn?: Date) {
    this.eventName = name;
    this.ocurredOn = ocurredOn || new Date();
    this.eventCreatorEntityId = entityCreatorId;
  }
}
