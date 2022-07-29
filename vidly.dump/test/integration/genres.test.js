const mongoose = require("mongoose");
const app = require("../../src/app");
const { Genre } = require("../../src/models/genresModel");
const request = require("supertest")(app);

describe("/api/genres", () => {
    describe("GET", () => {
        it("Should return all genres", async () => {
            const data = [{ name: "genre1" }, { name: "genre2" }];

            await Genre.collection.insertMany(data);
            const response = await request.get("/api/genres/");

            expect(response.statusCode).toEqual(200);
            expect(response.body.length).toEqual(2);
            expect(response.body).toMatchObject(data);

            await Genre.deleteMany();
        });
    });
});

afterAll(async () => {
    await mongoose.disconnect();
});