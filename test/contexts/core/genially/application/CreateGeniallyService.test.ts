import CreateGeniallyService from "../../../../../src/contexts/core/genially/application/CreateGeniallyService";
import GeniallyRepository from "../../../../../src/contexts/core/genially/domain/GeniallyRepository";
import InMemoryGeniallyRepository from "../../../../../src/contexts/core/genially/infrastructure/InMemoryGeniallyRepository";

let repository: GeniallyRepository;
let service: CreateGeniallyService;

beforeAll(() => {
	repository = new InMemoryGeniallyRepository();
	service = new CreateGeniallyService(repository);
});

describe("Create a genially", () => {
	it("should create a new genially", async () => {
		// Arrange
		const id = "my-genially-id";
		const name = "hello world";
		const description = "this is a test!";

		// Act
		await service.execute({ id, name, description });

		// Assert
		const result = await repository.find(id);

		expect(result.id).toBe(id);
		expect(result.name).toBe(name);
		expect(result.description).toBe(description);
	});

	it("should fail if name is too long", async () => {
		// Arrange
		const id = "my-genially-id";
		const name = "this is an invalid name because is too long";
		const description = "this is a test!";

		// Act
		const promise = service.execute({ id, name, description });

		// Assert
		await expect(promise).rejects.toThrowError();
	});

	it("should fail if name is too short", async () => {
		// Arrange
		const id = "my-genially-id";
		const name = "no";
		const description = "this is a test!";

		// Act
		const promise = service.execute({ id, name, description });

		// Assert
		await expect(promise).rejects.toThrowError();
	});

	it("should fail if no name is given", async () => {
		// Arrange
		const id = "my-genially-id";
		const name = "";
		const description = "this is a test!";

		// Act
		const promise = service.execute({ id, name, description });

		// Assert
		await expect(promise).rejects.toThrowError();
	});

	it("should fail if description is too long", async () => {
		// Arrange
		const id = "my-genially-id";
		const name = "hello world";
		const description = "this is a test!".repeat(125);

		// Act
		const promise = service.execute({ id, name, description });

		// Assert
		await expect(promise).rejects.toThrowError();
	});
});
