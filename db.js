const { MongoClient } = require('mongodb');

let dbConnnection;

module.exports = {
    connectToDb: (callback) => {
        MongoClient.connect('mongodb://localhost:27017/GroceryGetter')
            .then((client) => {
                dbConnnection = client.db()
                return callback()
            })
            .catch((err) => {
                console.log(err)
                return callback(err)
        })
    },
    getDb: () => dbConnnection
}