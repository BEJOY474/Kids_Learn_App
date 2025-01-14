const express = require('express');
const { adminLogin, adminLogout, getAllUserCount } = require('../controller/admin.controller');


const route = express.Router();


route.post("/login", adminLogin);
route.get("/logout", adminLogout);
route.get("/userCount", getAllUserCount);



module.exports = route;

