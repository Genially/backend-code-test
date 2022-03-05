export class GeniallyNameInvalid extends Error {
  constructor(name: string) {
    super(`name invalid :"${name}" su longitud debe ser de 3 a 20 caracteres`);
  }
}

export class GeniallyDescriptionInvalid extends Error {
  constructor(description: string) {
    super(
      `Description invalid :"${description}" su longitud debe ser de maximo 125 caracteres`
    );
  }
}
