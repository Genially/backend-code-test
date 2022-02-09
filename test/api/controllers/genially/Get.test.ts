import faker from "@faker-js/faker";
import request from "supertest";
import app from "../../../../src/api/app";

describe("GetController", () => {
  it("should return all Geniallys", async () => {
    await request(app)
      .post("/api/genially")
      .send({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        description: faker.lorem.words(125)
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);


    await request(app)
      .post("/api/genially")
      .send({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        description: faker.lorem.words(125)
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);

    await request(app)
      .post("/api/genially")
      .send({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        description: faker.lorem.words(125)
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);


    const response = await request(app)
      .get("/api/genially")
      .set("Accept", "application/json");

    expect(response.body).toHaveLength(3);
  });
});
