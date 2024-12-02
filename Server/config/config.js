require('dotenv').config();

const dev = {
    app:{
       port : process.env.PORT || 2000
    },
    db:{
        url : process.env.DB_URL || "mongodb://localhost:27017/EducationApp"
    },
    key:{
        jwt_key : process.env.JWT_SECRET_KEY || 'iu890u)(gyt5@#$%dfdxyuuiuih!@~<>/ft'
    }

};

module.exports = dev; 