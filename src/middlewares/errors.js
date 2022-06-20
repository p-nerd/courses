export const errorHandler = (err, req, res, next) => {
    return res.status(500).send(err.message);
};

export const notRoute = (req, res) => {
    return res.status(404).send("route not found");
}
