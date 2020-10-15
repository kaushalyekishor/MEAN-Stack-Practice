var mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {type: String},
    email: {type: String , unique: true},
    password: {type: String}
})

module.exports = mongoose.model('userModel', userSchema);