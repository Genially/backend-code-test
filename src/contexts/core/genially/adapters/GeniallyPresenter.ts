import Genially from "../domain/Genially";

export class GeniallyPresenter {
  public constructor(private genially: Genially) {}

  public toJSON() {
    // TODO: ask if we want to return the creation and modification dates

    return {
      id: this.genially.id,
      name: this.genially.name,
      description: this.genially.description,
    };
  }
}
