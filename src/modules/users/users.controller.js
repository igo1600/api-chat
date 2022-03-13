const User = require("./user.model");

const UsersController = {
    getAll: (req, res) => {
        const user = new User();
        user.getAll().then(results => {
            res.send(results);
        });
    },


    getOne: (req, res) => {
        const user = new User();
        user.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },

    create: (req, res) => {
        const user = new User();
        const body = req.body;
        user.create(body).then(result => {
            body.id = result.insertedId;
            res.json(body.id);
        }).catch((err) => {
            res.sendStatus(500);
        });
    },


    verify: (req, res, next) =>{
        const user = new User();
        const body = req.body;
        user.searchUser(body.email).then(result => {
            
        })
    }

    


}

module.exports = UsersController;