import 'express-async-errors';
import express from "express";
import middlewares from './middlewares/index.js';
import controllers from './controllers/index.js';

const app = express();

middlewares(app);
controllers(app);

export default app;
