const {MongoClient} = require('mongodb');
const connectionString="mongodb://localhost:27017";
let db;
const connectToDatabase = async () => {
    if(db) return db;
    const client = new MongoClient.connect(connectionString);
    db=client.db("videodb");
    return db;
};
module.exports = connectToDatabase;