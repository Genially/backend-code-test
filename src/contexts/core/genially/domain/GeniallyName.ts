/*El nombre de un genially no puede estar vacío y su longitud debe ser de 3 a 20 caracteres. */

import { GeniallyNameInvalid } from "./Errors";

export class GeniallyName {
  readonly value: string;
  constructor(value: string) {
    this.isValid(value);
    this.value = value;
  }

  private isValid(value: string) {
    if (!(value.length >= 3 && value.length <= 20)) {
      throw new GeniallyNameInvalid(value);
    }
  }
}
