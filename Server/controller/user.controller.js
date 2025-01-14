const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");

const { User } = require("../model/user.model");
const config = require("../config/config");
const jwtSecretAccessKey = config.key.jwt_key;

exports.createUser = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    // Check if the user already exists
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please login!",
      });
    }

    // If user doesn't exist, create a new user
    const newUser = new User({
      name,
      email,
      mobile,
      password,
    });

    // Save the user data to the database
    const userData = await newUser.save();

    console.log(userData);
    res.status(201).json({
      success: true,
      message: "User has been registered successfully. Please login now!",
      user: userData, // Optionally send back the created user data
    });
  } catch (error) {
    // Catch any errors and return an appropriate response
    res.status(500).json({
      success: false,
      message: "User registration failed!",
      error: error.message, // Optionally return the error message for debugging
    });
  }
};

exports.userLogin = async (req, res) => {
  console.log("User Login call");
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    console.log("User Data:", user);

    // Check if user exists
    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        message: "User does not exist with this email. Please register first!",
      });
    }

    // Compare passwords (ensure you await bcrypt.compare)
    const isLoginMatch = await bcrypt.compare(password, user.password);
    if (!isLoginMatch) {
      return res.status(400).json({
        statusCode: 400,
        message: "Incorrect password!",
      });
    }

    // Check if the user is banned
    if (user.isBanned) {
      return res.status(403).json({
        statusCode: 403,
        message: "User is banned!",
      });
    }

    // Generate JWT token
    const accessToken = jwt.sign(
      { userId: user._id, email: user.email },
      jwtSecretAccessKey,
      { expiresIn: "7d" }
    );

    // Set JWT token in cookie
    res.cookie("access_token", accessToken, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      httpOnly: true,
      secure: true, // Use secure: true in production
      sameSite: "none",
    });

    // Return success response
    return res.status(200).json({
      statusCode: 200,
      message: "Successfully Login!!",
      user,
      token: accessToken,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      statusCode: 500,
      message: "Internal server error",
      error: error.message || error,
    });
  }
};

exports.userData = (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, jwtSecretAccessKey);
    const useremail = user.email;

    User.findOne({ email: useremail }).then((data) => {
      return res.send({ status: "200", data: data });
    });
  } catch (error) {
    return res.send({ error: error });
  }
};

exports.updateUserData = async (req, res) => {
  const { id } = req.params;
  const { name, email, mobile, image, gender, profession } = req.body;
  try {
    await User.updateOne(
      { _id: id },
      {
        $set: {
          name,
          email,
          mobile,
          image,
          gender,
          profession,
        },
      }
    );

    return res.status(200).json({
      statusCode: 200,
      message: "Update successfull!!",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: "Something is wrong!",
    });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  console.log("User id : ",id);
  try {
    await User.deleteOne({ _id: id });  // Corrected deleteOne usage
    return res.status(200).json({
      statusCode: 200,
      message: "User deleted successfully!!",
    });
  }
  catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: "Something is wrong!",
    });
  }
}
