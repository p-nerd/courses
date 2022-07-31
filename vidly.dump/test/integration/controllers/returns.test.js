const mongoose = require("mongoose");
const app = require("../../../src/app");
const { Rental } = require("../../../src/models/rentalModel");
const { User } = require("../../../src/models/userModel");
const request = require("supertest")(app);

// POST /api/returns {customerId, movieId}

describe("POST /api/returns", () => {
    let customerId, movieId, rental, token;
    beforeEach(async () => {
        token = await new User({ name: "Shihab" }).generateToken2();
        customerId = mongoose.Types.ObjectId();
        movieId = mongoose.Types.ObjectId();
        rental = new Rental({
            customer: { _id: customerId, name: "12345", phone: "12345678" },
            movie: { _id: movieId, title: "1", dailyRentalRate: 5 },
        });
        await rental.save();
    });

    const exec = () => request
        .post("/api/returns")
        .set("x-auth-token", token)
        .send({ customerId, movieId });

    it("Return 401 if client is not logged in", async () => {
        token = "";
        const res = await exec();
        expect(res.statusCode).toEqual(401);
    });

    it("Return 400 if customerId is not provided", async () => {
        customerId = null;
        const res = await exec();
        expect(res.statusCode).toEqual(400);
    });

    it("Return 400 if movieId is not provided", async () => {
        movieId = null;
        const res = await exec();
        expect(res.statusCode).toEqual(400);
    });

    it("Return 404 if no rental found for this customer/movie", async () => {
        await Rental.deleteMany();
        const res = await exec();
        expect(res.statusCode).toEqual(404);
    });

    it("Return 400 if rental already processed", async () => {
        rental.dateReturned = Date.now();
        await rental.save();

        const res = await exec();
        expect(res.statusCode).toEqual(400);
    });

    // Return 200 if valid request
    // Set the return date
    // Calculate the rental fee
    // Increase the stock
    // Return the rental
    it("Return 200 if valid request", async () => {
        const res = await exec();
        expect(res.statusCode).toEqual(200);
        expect(res.body.rentalFee).not.toBeFalsy();
    })

    afterEach(async () => { await Rental.deleteMany(); });
});

afterAll(async () => { await mongoose.connection.close(); });
