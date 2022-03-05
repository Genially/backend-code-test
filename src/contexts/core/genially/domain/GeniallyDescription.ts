/*La descripción de un genially está limitada a 125 caracteres.*/

import { GeniallyDescriptionInvalid } from "./Errors";

export class GeniallyDescription {
  readonly value: string;
  constructor(value: string) {
    this.descriptionIsValid(value);
    this.value = value;
  }

  private descriptionIsValid(value: string) {
    if (!(value.length <= 125)) {
      throw new GeniallyDescriptionInvalid(value);
    }
  }
}
