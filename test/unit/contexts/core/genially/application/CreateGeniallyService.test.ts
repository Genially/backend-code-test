import { instance, mock } from "ts-mockito";
import CreateGeniallyService from "../../../../../../src/contexts/core/genially/application/CreateGeniallyService";
import GeniallyNotCreate from "../../../../../../src/contexts/core/genially/domain/GeniallyNotCreate";
import GeniallyRepository from "../../../../../../src/contexts/core/genially/domain/GeniallyRepository";

describe("CreateGeniallyService", () => {
  let subject: CreateGeniallyService;

  beforeEach(() => {
    const mockedGeniallyRepository = mock<GeniallyRepository>();
    const geniallyRepository = instance(mockedGeniallyRepository);
    subject = new CreateGeniallyService(geniallyRepository);
  });

  it("returns the created genially", async () => {
    const validGenially = {
      description: "description",
      id: "id",
      name: "name",
    };

    const genially = await subject.execute(validGenially);

    expect({
      id: genially.id,
      name: genially.name,
      description: genially.description,
      createdAt: genially.createdAt,
      modifiedAt: genially.modifiedAt,
      deletedAt: genially.deletedAt,
    }).toEqual({
      ...validGenially,
      createdAt: expect.any(Date),
      modifiedAt: undefined,
      deletedAt: undefined,
    });
  });

  it("throws an error if the genially cannot be created due to invalid data", async () => {
    const geniallyShortName = {
      description: "description",
      id: "id",
      name: new Array(2).fill("a").join(""),
    };

    await expect(subject.execute(geniallyShortName)).rejects.toThrow(
      GeniallyNotCreate
    );
  });
});
