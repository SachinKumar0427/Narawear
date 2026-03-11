const jwt = require("jsonwebtoken");
const User = require("./../Models/UserModel");

exports.protect = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;
        
        if(!token) throw new Error("you are not authenticated");
        const {userId} = await jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findById(userId);
        if(!user){
            res.cookie("jwt", "", {maxAge: 10000 });

            throw new Error("Account does not exist!");
        }
        req.user = user;

    } catch (error) {
        console.log(error.message)
        res.status(401).json({message: "you are not authorized to perform this action!"})
    }   finally {
    next();
    
    }
}