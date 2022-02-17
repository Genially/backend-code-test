import Genially from "../../../../../../src/contexts/core/genially/domain/Genially";
import GeniallyNotCreate from "../../../../../../src/contexts/core/genially/domain/GeniallyNotCreate";

describe("Genially", () => {
  describe("#constructor", () => {
    it("throws an error if the genially has a name with less than 3 characters", async () => {
      const shortName = new Array(2).fill("a").join("");

      expect(() => new Genially("id", shortName)).toThrow(
        new GeniallyNotCreate(
          `Genially cannot be created with name: ${shortName} (less than 3 characters)`
        )
      );
    });

    it("throws an error if the genially has a name with more than 20 characters", async () => {
      const longName = new Array(21).fill("a").join("");

      expect(() => new Genially("id", longName)).toThrow(
        new GeniallyNotCreate(
          `Genially cannot be created with name: ${longName} (more than 20 characters)`
        )
      );
    });

    it("throws an error if the genially has a description with more than 125 characters", async () => {
      const longDescription = new Array(126).fill("a").join("");

      expect(() => new Genially("id", "name", longDescription)).toThrow(
        new GeniallyNotCreate(
          `Genially cannot be created with description: ${longDescription} (more than 125 characters)`
        )
      );
    });
  });
});
