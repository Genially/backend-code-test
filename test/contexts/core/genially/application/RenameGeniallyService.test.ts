import RenameGeniallyService from "../../../../../src/contexts/core/genially/application/RenameGeniallyService";
import Genially from "../../../../../src/contexts/core/genially/domain/Genially";
import GeniallyRepository from "../../../../../src/contexts/core/genially/domain/GeniallyRepository";
import InMemoryGeniallyRepository from "../../../../../src/contexts/core/genially/infrastructure/InMemoryGeniallyRepository";

let repository: GeniallyRepository;
let service: RenameGeniallyService;

beforeAll(() => {
	repository = new InMemoryGeniallyRepository();
	service = new RenameGeniallyService(repository);
});

describe("Rename a genially", () => {
	it("should rename an existing genially", async () => {
		// Arrange
		const id = "my-genially-id";
		const name = "hello world";
		const description = "this is a test!";

		const genially = new Genially(id, name, description);
		await repository.save(genially);

		// Act
		const newName = "renamed genially";
		await service.execute(id, newName);

		// Assert
		const result = await repository.find(id);

		expect(result.name).toBe(newName);
	});

	it.skip("should update the modification date", async () => {
		// Arrange
		const id = "my-genially-id";
		const name = "hello world";
		const description = "this is a test!";

		const genially = new Genially(id, name, description);
		await repository.save(genially);

		// Act
		const newName = "renamed genially";
		await service.execute(id, newName);

		// Assert
		// TODO
	});

	it("should fail if new name is too short", async () => {
		// Arrange
		const id = "my-genially-id";
		const name = "hello world";
		const description = "this is a test!";

		const genially = new Genially(id, name, description);
		await repository.save(genially);

		// Act
		const newName = "no";
		const promise = service.execute(id, newName);

		// Assert
		await expect(promise).resolves.toThrowError();
	});

	it("should fail if new name is too long", async () => {
		// Arrange
		const id = "my-genially-id";
		const name = "hello world";
		const description = "this is a test!";

		const genially = new Genially(id, name, description);
		await repository.save(genially);

		// Act
		const newName = "renamed genially".repeat(20);
		const promise = service.execute(id, newName);

		// Assert
		await expect(promise).resolves.toThrowError();
	});
});
