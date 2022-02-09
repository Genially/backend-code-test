import request from "supertest";
import app from "../../../../src/api/app";
import { createGenially } from "../../../utils/createGenially";


describe("DeleteController", () => {
  it("should delete an existing Genially", async () => {
    const genially = createGenially()[0];
    const server = request(app);

    await server
      .post("/api/genially")
      .send(genially)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);

    await server
      .delete(`/api/genially/${genially.id}`)
      .expect(204);
  });

  it("should not delete if the genially not exists", (done) => {
    request(app)
      .delete("/api/genially/1")
      .set("Accept", "application/json")
      .expect(404, {
        message: "Genially <1> does no exist"
      }, done);
  });
});
