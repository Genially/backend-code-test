import request from "supertest";
import app from "../../../../src/api/app";
import { createInvalidNameGenially, createGenially } from "../../../utils/createGenially";

describe("PutController", () => {
  const genially = createGenially()[0];

  it("should updates an existing Genially", async () => {
    const server = request(app);

    await server
      .post("/api/genially")
      .send(genially)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);

    const response = await server
      .patch(`/api/genially/${genially.id}`)
      .send({name: "fake"})
      .set("Accept", "application/json");

    expect(response.body.name).toBe("fake");
  });

  it("should fails to create a new Genially if the name is invalid", async () => {
    const server = request(app);

    await server
      .post("/api/genially")
      .send(genially)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);

    const response = await server
      .patch(`/api/genially/${genially.id}`)
      .send(createInvalidNameGenially(""))
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("The name of a genially cannot be empty and its length has to be from 3 to 20 characters.");
  });

  it("should returns 404 if the Genially not exists", async () => {
    await request(app)
      .patch("/api/genially/1")
      .send(genially)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, {
        message: "Genially <1> does no exist"
      });
  });
});
