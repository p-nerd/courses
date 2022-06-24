import mongoose from "mongoose";
import Fawn from "fawn";

const mongo = () => {
    const uri = "mongodb://localhost:27017/vidly-dump"
    mongoose
        .connect(uri)
        .then(() => {
            console.log("Connection with mongodb successful! with", uri);
            Fawn.init(uri);
        })
        .catch(err => {
            console.log("Mongodb connection failure!! with", uri);
        });
};

export default mongo;