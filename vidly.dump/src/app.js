import 'express-async-errors';
import express from "express";
import routers from './routers/index.js';
import middlewares from './middlewares/index.js';

const app = express();

middlewares(app);
routers(app);

export default app;
