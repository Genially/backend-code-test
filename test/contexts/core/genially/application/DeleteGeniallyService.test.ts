import DeleteGeniallyService from "../../../../../src/contexts/core/genially/application/DeleteGeniallyService";
import Genially from "../../../../../src/contexts/core/genially/domain/Genially";
import GeniallyRepository from "../../../../../src/contexts/core/genially/domain/GeniallyRepository";
import InMemoryGeniallyRepository from "../../../../../src/contexts/core/genially/infrastructure/InMemoryGeniallyRepository";

let repository: GeniallyRepository;
let service: DeleteGeniallyService;

beforeAll(() => {
	repository = new InMemoryGeniallyRepository();
	service = new DeleteGeniallyService(repository);
});

describe("Delete a genially", () => {
	it("should delete a genially", async () => {
		// Arrange
		const id = "my-genially-id";
		const name = "hello world";
		const description = "this is a test!";

		const genially = new Genially(id, name, description);
		await repository.save(genially);

		// Act
		await service.execute(id);

		// Assert
		const result = await repository.find(id);

		expect(result).toBeFalsy();
	});
});
