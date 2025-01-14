const express = require('express');
const { createUser, userLogin, userData, updateUserData, deleteUser } = require('../controller/user.controller');


const route = express.Router();


route.post("/register", createUser );
route.post("/login", userLogin );
route.post("/userData", userData ); 
route.get("/userDataSerch/:id", userData ); 
route.put("/updateUserData/:id", updateUserData ); 
route.delete("/deleteUserData/:id", deleteUser ); 


module.exports = route;

