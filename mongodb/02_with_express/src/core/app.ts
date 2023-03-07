import express, { json } from "express";

const app = express();

app.use(json());

const base_api = "/api";

app.get(`${base_api}/students/detail/:id`, async (req, res, next) => {
    console.log("GET /api/students", req.query);

    res.send("Hello World");
});

export default app;
