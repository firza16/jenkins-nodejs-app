const { test } = require("node:test");
const assert = require("node:assert");
const request = require("supertest");

const app = require("../src");

test("GET / should return welcome message", async () => {
  const response = await request(app).get("/").expect(200);

  assert.deepStrictEqual(response.body, {
    message: "Hello from Jenkins",
    status: "success",
  });
});

test("GET /health should return healthy status", async () => {
  const response = await request(app).get("/health").expect(200);

  assert.deepStrictEqual(response.body, {
    status: "healthy",
  });
});
