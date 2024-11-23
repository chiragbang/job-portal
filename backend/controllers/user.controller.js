import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';




// ----------------------------------------------------------------------------------------------------- REGISTER USER
export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        console.log(fullname, email, phoneNumber, password, role);
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                message: "User already exists with same Email",
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await User.create
            ({
                fullname,
                email,
                phoneNumber,
                password: hashedPassword,
                role
            })

        return res.status(201).json({
            message: "Account created successfully.",
            success: true,
        })
    } catch (error) {
        console.log(error)
    }
}

// ----------------------------------------------------------------------------------------------------- LOGIN USER
export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            })
        }

        // User with same email or not
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false
            })
        }

        // User's Password match or not
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false
            })
        }

        // Check role is correct or not
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account does'nt exist with current role.",
                success: false
            })
        }

        // Generation of Token
        const tokenData = {
            userId: user._id
        }

        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' })

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `Welcome back ${user.fullname}`,
            user,
            success: true,
        })

    } catch (error) {
        console.log(error);
    }
}


// ----------------------------------------------------------------------------------------------------- LOGOUT USER
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged Out Successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}


// ----------------------------------------------------------------------------------------------------- UPDATE PROFILE USER
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file
    

        // cloudinary implementation for resume
        let skillsArray;
        if (skills) {
            skillsArray = array.split(",")
        }
        const userId = req.id; //middleware authentication
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User Not Found",
                success: false
            })
        }

        if (fullname) user.fullname = fullname
        if (email) user.email = email
        if (phoneNumber) user.phoneNumber = phoneNumber
        if (bio) user.profile.bio = bio
        if (skills) user.profile.skills = skillsArray

        // user.fullname = fullname,
        //     user.email = email,
        //     user.phoneNumber = phoneNumber,
        //     user.profile.bio = bio,
        //     user.profile.skills = skillsArray


        //Resume comes here later:

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message: "Profile Updated successfully",
            user,
            success: true
        })

    } catch (error) {
        console.log(error)
    }

}