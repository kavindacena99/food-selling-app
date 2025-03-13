const jwt = require("jsonwebtoken");
const blacklistedTokens = require('../blacklist'); // this is use for logout

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

//to check if the token is in the blacklist.
/*
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Get token from header
  
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
  
    // Check if the token is blacklisted
    if (blacklistedTokens.has(token)) {
      return res.status(401).json({ message: 'Token has been blacklisted. Please login again.' });
    }
  
    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.userId; // Attach the user ID to the request object
      next();
    } catch (err) {
      res.status(401).json({ message: 'Token is not valid' });
    }
};
*/


module.exports = protect;