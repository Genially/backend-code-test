import request from "supertest";
import app from "../../../../src/api/app";
import { createInvalidNameGenionally, createGenially, createInvalidDescriptionGenionally } from "../../../utils/createGenially";

describe("CreateController", () => {
  it("should creates a new Genially", async () => {
    await request(app)
      .post("/api/genially")
      .send(createGenially()[0])
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);

    const response = await request(app)
      .get("/api/genially")
      .set("Accept", "application/json");

    expect(response.body).toHaveLength(1);
  });

  it("should fails to create a new Genially if the description is invalid", (done) => {
    request(app)
      .post("/api/genially")
      .send(createInvalidDescriptionGenionally(""))
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, {
        message: "The description of a genially is limited to 125 characters."
      }, done);
  });

  it("should fails to create a new Genially if the name is invalid", (done) => {
    request(app)
      .post("/api/genially")
      .send(createInvalidNameGenionally(""))
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, {
        message: "The name of a genially cannot be empty and its length has to be from 3 to 20 characters."
      }, done);
  });
});
