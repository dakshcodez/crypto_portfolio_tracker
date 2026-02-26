const admin = require("../config/firebase");

const verifyToken = async(req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" })
    }
    const token = authHeader.split(" ")[1];

    try {
        const decoded = await admin.auth.verifyToken(decoded);
        req.user = decoded;
        next();
    } catch(error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = verifyToken;