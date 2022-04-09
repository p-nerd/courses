const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cookieParser = require('cookie-parser')

const { err404, err000 } = require("./middlewares/common/err");
const { PORT, MONGODB_CONNECTION_STRING, COOKIE_SECRET } = require('./utils/config');
const loginRouter = require('./routers/login.routes');
const logger = require('./middlewares/common/logger');
const usersRouter = require('./routers/users.routes');
const inboxRouter = require('./routers/inbox.routes');


const app = express()


mongoose
    .connect(MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connection with db successful'))
    .catch(err => console.log('Connection with db failure\n' + err))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(COOKIE_SECRET));
app.use(logger);


// routes
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);


// err middlewares
app.use(err404)
app.use(err000)


app.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})
