import request from "supertest";
import app from "../../../../src/api/app";
import { createGenially} from "../../../utils/createGenially";

describe("FindController", () => {
  const genially = createGenially()[0];

  it("should find a Genially", async () => {
    await request(app)
      .post("/api/genially")
      .send(genially)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);

    const response = await request(app)
      .get(`/api/genially/${genially.id}`)
      .set("Accept", "application/json");

    expect(response.body.name).toBe(genially.name);
  });

  it("should returns 404 if the Genially not exists", async () => {
    await request(app)
      .post("/api/genially")
      .send(genially)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);

    const response = await request(app)
      .get("/api/genially/1")
      .set("Accept", "application/json");

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Genially <1> does no exist");
  });
});
