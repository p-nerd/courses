import { Db, MongoClient } from "mongodb";

let _client: MongoClient | null = null;
let _db: Db | null = null;

export const connect = async () => {
    const url = "mongodb://localhost:27017";
    const dbName = "textDb";
    _client = new MongoClient(url);
    console.log("Connecting to mongodb...");
    await _client.connect();
    console.log("Connected successfully to mongodb");
    _db = _client.db(dbName);
    return _db;
};

export const close = () => {
    if (_client) _client.close();
};

const db = async () => {
    if (!_db) {
        await connect();
    }
    return _db;
};

export default db;
