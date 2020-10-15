var userService = require('../services/user.service');

exports.createUser = (req, res) => {
    try {
        req.assert('name', 'Name cant be blank').notEmpty();
        req.assert('email', 'Email is NOt Valid').isEmail();
        req.assert('password', 'Password must be at least 4 char').len(4);

        //check validation errors
        var errors = req.validationErrors();

        if (errors) {
            return res.status(400).send(errors);
        } else {
            userService.createUser(req, res);
        }

    } catch (error) {
        res.send(error);
    }
}