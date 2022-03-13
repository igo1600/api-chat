const Database = require('./database');
const { ObjectId } = require('mongodb');


class Model {

    collection;

    constructor(collectionName) {
        // Set collection
        this.collection = Database.collection(collectionName);
    }

    getAll() {
        return new Promise((accept, reject) => {
            this.collection.find().toArray((err, results) => {
             if (err) {
                 reject(err);
             } else {
                accept(results);
             }
            });
        });
    }

    getOne(id) {
        return this.collection.findOne({
            _id: ObjectId(id)
        });
    }



    create(data) {
        return new Promise((accept, reject) => {
            this.collection.insertOne(data, (err, result) => {
                if(err) {
                    reject(err);
                } 
                accept(result);
            })
        }) 
    }
    
}

module.exports = Model;