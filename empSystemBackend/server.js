var express = require('express');
var bodyParsor = require('body-parser');
var dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
var app = express();

const database = require('./config/database.config');
const userRoute = require('./app/routes/user.route');

app.use(bodyParsor.urlencoded({extended: false}));
app.use(bodyParsor.json());
app.use('/user', userRoute);

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// enable CORS using npm package
var cors = require('cors');
app.use(cors());

database.mongoose;

app.listen(port, () => {
    console.log("server  is listening on port " +port);
})