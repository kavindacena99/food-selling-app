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

// Middleware to check if the user is an admin
const admin = (req,res,next)=>{
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(403).json({ message: "Access denied. Admins only." });
    }
};

module.exports = protect;