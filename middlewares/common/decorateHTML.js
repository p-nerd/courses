const { APP_TITLE } = require("../../utils/config");

const decorateHTML = (title) => (req, res, next) => {
    res.locals.title = `${title} - ${APP_TITLE}`;
    res.locals.html = true;
    next();
};

module.exports = decorateHTML;