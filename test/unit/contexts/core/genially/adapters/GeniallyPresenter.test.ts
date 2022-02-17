import { GeniallyPresenter } from "../../../../../../src/contexts/core/genially/adapters/GeniallyPresenter";
import Genially from "../../../../../../src/contexts/core/genially/domain/Genially";

describe("GeniallyPresenter", () => {
  describe("#toJSON", () => {
    it("returns the genially as a JSON object", async () => {
      const genially = new Genially("id", "name", "description");
      const subject = new GeniallyPresenter(genially);

      expect(subject.toJSON()).toEqual({
        id: "id",
        name: "name",
        description: "description",
      });
    });
  });
});
