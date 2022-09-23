const request = require("supertest");
const app = require("../app/app");

describe("App Root Url And Health Url Testing", () => {

  test("app root url testing", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "success" });
  });

  test("app health url testing", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "success" });
  });
  
});