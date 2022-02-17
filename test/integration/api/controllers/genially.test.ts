import request from "supertest";
import app from "../../../../src/api/app";
import CreateGeniallyService from "../../../../src/contexts/core/genially/application/CreateGeniallyService";

describe("/genially", () => {
  describe("POST /genially", () => {
    it("returns a 201 created status code if the genially is created", async () => {
      const response = await request(app)
        .post("/genially")
        .send({ name: "name", id: "id" })
        .set("Accept", "application/json");

      expect(response.status).toEqual(201);
    });

    it("returns created genially", async () => {
      const response = await request(app)
        .post("/genially")
        .send({ name: "name", id: "id" })
        .set("Accept", "application/json");

      expect(response.body).toEqual({ name: "name", id: "id" });
    });

    it("returns a 400 bad request error if the genially breaks any creation rule (in this case name too short)", async () => {
      const response = await request(app)
        .post("/genially")
        .send({ name: "na", id: "id" })
        .set("Accept", "application/json");

      expect(response.status).toEqual(400);
      expect(response.body).toEqual({
        message:
          "Genially cannot be created with name: na (less than 3 characters)",
      });
    });

    it("returns a 500 internal server error if the service throws an unknown error", async () => {
      const spy = jest.spyOn(CreateGeniallyService.prototype, "execute");
      spy.mockImplementation(() => Promise.reject());

      const response = await request(app)
        .post("/genially")
        .send({ name: "na", id: "id" })
        .set("Accept", "application/json");

      expect(response.status).toEqual(500);
    });
  });
});
