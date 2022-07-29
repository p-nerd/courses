const mongoose = require("mongoose");
const app = require("../../src/app");
const { Genre } = require("../../src/models/genresModel");
const request = require("supertest")(app);

describe("/api/genres", () => {
    it("Should return all genres", async () => {
        await Genre.collection.insertMany([
            { name: "genre1" },
            { name: "genre2" }
        ]);
        const response = await request.get("/api/genres/");
        console.log(response.body);
        await Genre.deleteMany();
    });
});

afterAll(async () => {
    await mongoose.disconnect();
});