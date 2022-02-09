import request from "supertest";
import app from "../../../../src/api/app";
import { createGenially } from "../../../utils/createGenially";

describe("CountController", () => {
  it("should return the number of Geniallys", async () => {
    const geniallys = createGenially(3);

    await request(app)
      .post("/api/genially")
      .send(geniallys[0])
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);

    await request(app)
      .post("/api/genially")
      .send(geniallys[1])
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);

    await request(app)
      .post("/api/genially")
      .send(geniallys[2])
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);


    const response = await request(app)
      .get("/api/genially/count")
      .set("Accept", "application/json");

    expect(response.body.count).toBe(3);
  });
});
