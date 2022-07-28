const request = require("supertest");
const server = require("../../src/index");

describe("/api/genres", () => {
    describe("GET", () => {
        it("Should return all genres", async () => {
            const res = await request(server).get("/api/genres/");
            expect(res.statusCode).toBe(200);
        });
    });
});
