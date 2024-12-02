const express = require('express');
const { createUser, userLogin, userData, updateUserData } = require('../controller/user.controller');


const route = express.Router();


route.post("/register", createUser );
route.post("/login", userLogin );
route.post("/userData", userData );
route.post("/updateUserData", updateUserData );


module.exports = route;

