const jwt = require("jsonwebtoken");

const protect = (req,res,next) => {
    try{
        const token = req.header("Authorization");
        if(!token){
            return res.status(401).json({ message: "Unauthorized, no taken"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.userId;

        // proceed to next middleware
        next();
    }catch(err){
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = protect;