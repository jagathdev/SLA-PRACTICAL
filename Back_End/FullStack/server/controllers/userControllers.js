
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

export const userCreate = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "Email already registered",
                success: false
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const registerData = await userModel.create({
            name,
            email,
            password: hashPassword
        });

        return res.status(201).json({
            message: "User registered successfully",
            success: true,
            user: registerData
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Register Failed",
            success: false
        });
    }
};



export const userCheck = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password required",
                success: false
            });
        }

        const findEmail = await userModel.findOne({ email });

        if (!findEmail) {
            return res.status(404).json({
                message: "Email id is not found",
                success: false
            });
        }

        const comparePassword = await bcrypt.compare(password, findEmail.password);

        if (!comparePassword) {
            return res.status(401).json({
                message: "Password is wrong",
                success: false
            });
        }

        return res.status(200).json({
            message: "Login Successful",
            success: true
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Login Failed",
            success: false
        });
    }
};


export const userShow = async (req, res) => {
    try {
        const allUsersData = await userModel.find().select("-password");

        return res.status(200).json({
            message: "Data fetched successfully",
            success: true,
            users: allUsersData
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Failed to fetch users",
            success: false
        });
    }
};
