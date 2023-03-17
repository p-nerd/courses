import { Db, MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");

const insertStudent = async (db: Db, student: any) => {
    const collection = db.collection("students");
    const result = await collection.insertOne(student);
    console.log(result);
};

const searchStudent = async (db: Db, query: any) => {
    const collection = db.collection("students");
    const result = await collection.findOne(query);
    return result;
};

const student = {
    name: "John",
    age: 30,
    city: "New York",
};

const main = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db("fpi");
        // await insertStudent(db, student);
        // const result = await searchStudent(db, { name: "John" });
        // const result = await searchStudent(db, { age: 30 });
        // const result = await searchStudent(db, { age: { $gt: 25 } });
        const result = await searchStudent(db, { age: { $gt: 40 } });
        console.log(result);
    } catch (err: any) {
        console.error(err);
    } finally {
        await client.close();
    }
};

main().catch(err => console.error(err));
