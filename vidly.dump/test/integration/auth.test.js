const app = require("../../src/app");
const { Genre } = require("../../src/models/genresModel");
const { User } = require("../../src/models/userModel");
const request = require("supertest")(app);

describe("auth middleware", () => {

    let token;
    const exec = () => request
        .post("/api/genres")
        .set("x-auth-token", token)
        .send({ name: "genre1" });

    afterEach(async () => { await Genre.deleteMany(); });

    it("Should return 401 if no jwt token provide", async () => {
        token = "";
        const res = await exec();
        expect(res.statusCode).toEqual(401);
    });

    it("Should return 400 if jwt token is invalid", async () => {
        token = "invalid jwt";
        const res = await exec();
        expect(res.statusCode).toEqual(400);
    });

    it("Should return 201 if jwt token is valid", async () => {
        token = await new User().generateToken2();
        const res = await exec();
        expect(res.statusCode).toEqual(201);
    });
});