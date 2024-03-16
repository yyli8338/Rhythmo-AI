const userModel = require("../models/user"); 

const checkLogin = async (req, res, next) => { // check if user is already logged in
    const { userId } = req.session;
    
    if (!userId) {
        return res.status(403).json({ status: "ERROR", message: "User not logged in" });
    }
    
    const user = await userModel.findById(userId);

    if (!user) {
        return res.status(404).json({ status: "ERROR", message: "User does not exist" });
    }

    // attach the user object to the request
    req.user = user;
    
    next();
};

module.exports = checkLogin;