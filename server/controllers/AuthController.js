import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const maxAge = 3*24*60*60*1000;

const createToken = (email, userId) => {
  return jwt.sign({email,userId}, process.env.JWT_KEY, { expiresIn: maxAge });
}

export const signup = async (req,res,next) => {
  try{
    const {email,password} = req.body;
    if(!email || !password){
      return res.status(400).send("Email and Password is required");
    }

    // Check duplicate email
    const existingUser = await User.findOne({ email });
    if(existingUser) return res.status(409).send("Email already exists");

    const user = await User.create({email,password});
    const token = createToken(email,user._id);

    res.cookie("jwt", token, {
      maxAge,
      secure: false,    // localhost
      sameSite: "None",
      httpOnly: true
    });

    return res.status(201).json({
      user: {
        id: user._id,
        email: user.email,
        profileSetup: user.profileSetup || false
      }
    });

  } catch(error){
    console.log("Signup Error:", error);
    return res.status(500).send("Internal Server Error");
  }
}

export const login = async (req,res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Email and Password are required");
    }

    const user = await User.findOne({ email });
    if(!user) return res.status(404).send("User not found");

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(401).send("Invalid credentials");

    const token = createToken(email, user._id);

    res.cookie("jwt", token, {
      maxAge,
      secure: false,
      sameSite: "None",
      httpOnly: true
    });

    return res.status(200).json({
      user: {
        id: user._id,
        email: user.email,
        profileSetup: user.profileSetup || false
      }
    });

  } catch(error){
    console.log("Login Error:", error);
    return res.status(500).send("Internal Server Error");
  }
}
