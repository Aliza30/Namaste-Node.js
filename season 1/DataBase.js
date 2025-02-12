// create an mongodb connection here  
const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://NodeLearn:NodeLearn@namastenodebyaliza.7nlll.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNodeByAliza';
const client = new MongoClient(url);
const dbName = "HelloWorld";


async function main() {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("dumb");
    const NewData = {
        FirstName: "Lala", LastName: "kali", address: "africa", phoneNumber: "1234567890"
    }
    const insertResult = await collection.insertOne(NewData);
    // console.log("Inserted Result =>", insertResult);
    const findResult = await collection.find({}).toArray();
    console.log("Found Result =>", findResult);

    console.log('Deleted documents =>', deleteResult);
    // Your database operations here...

    return 'done.';
}

//------------ RETURN THE PROMISE ----------------------------------------------------
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
