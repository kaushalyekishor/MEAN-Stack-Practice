var crypto =  require('crypto');
var bcrypt = require('bcrypt-nodejs');

var userModel = require('../model/user.model'); 

exports.createUser = async (req, res) => {
    try {
        var userExist = await userModel.findOne({
            email: req.body.email
        });

        if(userExist){
            res.send({
                message:'user already exist, please try different emial id'
            })
        }

        let user = new userModel({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })

        await await bcrypt.hash(req.body.password, bcrypt.genSaltSync(10), null, async function (err, hash) {
            if (err) {
                throw err
            }
            else {
                user.password = hash
            }

            let userResponse = await userModel.create(user);

            res.send({
                status: userResponse.name + ' registered'
            })
        })
    }
     catch (error) {
        res.send(error);
    }
} 

