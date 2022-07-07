import mongoose from "mongoose";
import Fawn from "fawn";

const mongo = async () => {
    const uri = "mongodb://localhost:27017/vidly-dump"
    try {
        await mongoose.connect(uri)
        console.log("Connection with mongodb successful! with", uri);
        Fawn.init(uri);
    } catch (err) {
        console.log("Mongodb connection failure!! with", uri, "\n", `error: ${err}`);
        process.exit(1);
    }
};

export default mongo;