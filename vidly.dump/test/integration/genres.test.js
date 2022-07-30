const app = require("../../src/app");
const { Genre } = require("../../src/models/genresModel");
const { User } = require("../../src/models/userModel");
const request = require("supertest")(app);

describe("GET /api/genres/", () => {
    afterEach(async () => { await Genre.deleteMany(); });
    it("Should return all genres", async () => {
        const data = [{ name: "genre1" }, { name: "genre2" }];
        await Genre.collection.insertMany(data);

        const res = await request.get("/api/genres/");

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
        expect(res.body).toMatchObject(data);
    });
});

describe("GET /api/genres/:id", () => {
    it("Should return a genre if valid it is passed", async () => {
        const data = { name: "genre1" };

        const genre = new Genre(data);
        await genre.save();

        const genreId = String(genre._id);
        const res = await request.get("/api/genres/" + genreId);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toMatchObject(data);

        await Genre.deleteMany();
    });
    it("Should return 404 if invalid id is passed", async () => {
        const genreId = "1";
        const res = await request.get("/api/genres/" + genreId);

        expect(res.statusCode).toEqual(404);
    });
});

describe("POST /api/genres/", () => {
    /**
     * Define the happy path, and then in each test, we
     * change one parameter that clearly aligns with the
     * test. 
     */
    let token, data;
    const exec = () => request
        .post("/api/genres")
        .set("x-auth-token", token)
        .send(data);

    beforeEach(async () => { token = await new User().generateToken2() });
    afterEach(async () => { await Genre.deleteMany(); });

    it("Should return 400 if genre name length less then 3 character", async () => {
        data = { name: "g" };
        const res = await exec();

        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual(`"name" should have a minimum length of 3`)
    });
    it("Should return 400 if genre name length grater then 50 character", async () => {
        data = { name: new Array(52).join("g") };
        const res = await exec();

        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual(`"name" should have maximum length of 50`)
    });
    it("Should save and return if given valid genre", async () => {
        data = { name: "genre1" };

        const res = await exec();
        const genre = await Genre.findOne({ name: "genre1" });

        expect(res.statusCode).toEqual(201);
        expect(genre).not.toBeFalsy();
        expect(res.body.name).toEqual(genre.name);
        expect(res.body._id).toEqual(genre.id);
    });
});
