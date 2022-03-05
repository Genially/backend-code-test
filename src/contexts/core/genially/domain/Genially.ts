import { GeniallyDescription } from "./GeniallyDescription";
import { GeniallyName } from "./GeniallyName";

export default class Genially {
  private _id: string;
  private _name: GeniallyName;
  private _description: GeniallyDescription;
  private _createdAt: Date;
  private _modifiedAt: Date;
  private _deletedAt: Date;

  constructor(
    id: string,
    name: GeniallyName,
    description?: GeniallyDescription
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._createdAt = new Date();
  }
  public deleteFromDate(date: Date): void {
    this._deletedAt = date;
  }
  public rename(newName: GeniallyName): void {
    this._name = newName;
    this._modifiedAt = new Date();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name.value;
  }

  get description(): string {
    return this._description.value;
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
