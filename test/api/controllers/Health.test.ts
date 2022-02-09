import request from "supertest";
import app from "../../../src/api/app";

describe("HealthController", () => {
  it("should returns ok", async () => {
    const response = await request(app)
      .get("/")
      .set("Accept", "application/json");

    expect(response.body.status).toBe("ok");
  });
});
