const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");

const config = require("../config/config");
const { Admin } = require("../model/admin.model");
const { User } = require("../model/user.model");
const jwtSecretAccessKey = config.key.jwt_key;

exports.adminLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
     
      // Check if admin exists
      const admin = await Admin.findOne({ email });
  
      if (!admin) {
        return res.status(400).json({
          statusCode: 400,
          message: "Admin does not exist with this email. Please try again!",
        });
      }
  
      if (password !== admin.password) {
        return res.status(400).json({
          statusCode: 400,
          message: "Incorrect password!",
        });
      }
  
  
      // Generate JWT token
      const accessToken = jwt.sign(
        { adminId: admin._id, email: admin.email },
        jwtSecretAccessKey,
        { expiresIn: "7d" }
      );
  
      // Set JWT token in cookie
      res.cookie("access_token", accessToken, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        secure: true, // Make sure to use secure: true in production
        sameSite: "none",
      });
  
      // Return success response
      return res.status(200).json({
        statusCode: 200,
        message: "Successfully Login!!",
        admin,
        token: accessToken,
      });
    } catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: "Internal server error",
        error: error.message || error,
      });
    }
};

exports.adminLogout = async (req, res) => {
    try {
      // Clear cookie
      res.clearCookie("access_token");
  
      return res.status(200).json({
        statusCode: 200,
        message: "Logout successfully", 
      });
    }
    catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: "Internal server error",
        error: error.message || error,
      });
    }
}

exports.getAllUserCount = async (req, res) => {
    try {
      const countUser = await User.countDocuments();
      return res.status(200).json({
        statusCode: 200,
        message: "Total users",
        data: countUser,
      });
    } catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: "Internal server error",
        error: error.message || error,
      });
    }
};