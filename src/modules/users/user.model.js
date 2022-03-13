const Model = require('../../core/model');

class User extends Model {
    constructor() {
        super('Users');
    }

    searchUser(email) {
        return new Promise((resolve, reject) => {
            collection.findOne({email: email}, (err, result) =>{
                if(err){
                    reject(err);
                }
                if(result){
                    resolve(result);
                } 
            })
        })
    }
}

module.exports = User;