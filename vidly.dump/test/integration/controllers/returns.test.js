const mongoose = require("mongoose");
const app = require("../../../src/app");
const { Rental } = require("../../../src/models/rentalModel");
const request = require("supertest")(app);

// POST /api/returns {customerId, movieId}

// Return 401 if client is not logged in
// Return 400 if customerId is not provided
// Return 400 if movieId is not provided
// Return 404 if no rental found for this customer/movie
// Return 400 if rental already processed
// Return 200 if valid request
// Set the return date
// Calculate the rental fee
// Increase the stock
// Return the rental


describe("POST /api/returns", () => {
    let customerId, movieId, rental;
    beforeEach(async () => {
        customerId = mongoose.Types.ObjectId();
        movieId = mongoose.Types.ObjectId();
        rental = new Rental({
            customer: { _id: customerId, name: "12345", phone: "12345678" },
            movie: { _id: movieId, title: "1", dailyRentalRate: 5 }
        });
        await rental.save();
    })

    it("Should return rental of given rental id", async () => {
        const returnedRental = await Rental.findById(rental._id);
        console.log(returnedRental);
    })

    afterEach(async () => { await Rental.deleteMany(); });
});

afterAll(async () => { await mongoose.connection.close(); });
