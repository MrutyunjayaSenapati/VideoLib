const connectToDatabase = require('../config/db');
const dbMiddleware = async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        req.db = db;
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = dbMiddleware;