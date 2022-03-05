import CreateGeniallyService from "../../../../../src/contexts/core/genially/application/CreateGeniallyService";
import Genially from "../../../../../src/contexts/core/genially/domain/Genially";
import GeniallyRepository from "../../../../../src/contexts/core/genially/domain/GeniallyRepository";
import InMemoryGeniallyRepository from "../../../../../src/contexts/core/genially/infrastructure/InMemoryGeniallyRepository";

let repository: GeniallyRepository;
let createGeniallyService: CreateGeniallyService;

beforeEach(() => {
  repository = new InMemoryGeniallyRepository();
  createGeniallyService = new CreateGeniallyService(repository);
});

describe("test of  CreateGeniallyService", () => {
  it("should create a valid genially", async () => {
    await createGeniallyService.execute({
      id: "id-test",
      name: "name-test",
      description: "descriptions-test",
    });

    const genially = await repository.find("id-test");
    expect(genially).toBeInstanceOf(Genially);
    expect(genially.id).toEqual("id-test");
  });
});
