const User = require('../models/userModel.js');
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {

    try {
      const { name, email, password, mobile } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User with this email already exists" });
      }
      const Hashpassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: Hashpassword, mobile });
      await newUser.save(); 
      
      return res.status(201).json(newUser); 
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Server error" });
    }
  }

  const comparePassword = async (password, Hashpassword) => {
    try {
      return await bcrypt.compare(password, Hashpassword);
    } catch (error) {
      throw new Error('Error comparing passwords');
    }
  };
  
  const createToken = (_id) => {
    return jwt.sign({ _id }, "usersecretkey", { expiresIn: "3d" });
  };
  
  const Loginuser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({
          error: "No user found"
        });
      }
      const match = await comparePassword(password, user.password);
      if (match) {
        const token = createToken(user._id); 
        return res.status(200).json({
          token, 
          message: "Login successful"
        });
      } else {
        return res.status(401).json({
          error: "Invalid password"
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "An error occurred. Please try again later."
      });
    }
  };
  

  
module.exports = { registerUser,Loginuser};


