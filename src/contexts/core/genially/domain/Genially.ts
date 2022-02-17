import GeniallyNotCreate from "./GeniallyNotCreate";

export default class Genially {
  private _id: string;
  private _name: string;
  private _description: string;
  private _createdAt: Date;
  private _modifiedAt: Date;
  private _deletedAt: Date;

  constructor(id: string, name: string, description?: string) {
    if (name.length < 3) {
      throw new GeniallyNotCreate(
        `Genially cannot be created with name: ${name} (less than 3 characters)`
      );
    }

    if (name.length > 20) {
      throw new GeniallyNotCreate(
        `Genially cannot be created with name: ${name} (more than 20 characters)`
      );
    }

    if (description?.length > 125) {
      throw new GeniallyNotCreate(
        `Genially cannot be created with description: ${description} (more than 125 characters)`
      );
    }

    this._id = id;
    this._name = name;
    this._description = description;
    this._createdAt = new Date();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get modifiedAt(): Date {
    return this._modifiedAt;
  }

  get deletedAt(): Date {
    return this._deletedAt;
  }
}
