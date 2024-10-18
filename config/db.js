
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log(`Database Name: ${conn.connection.name}`);
        console.log(`Connection Port: ${conn.connection.port}`);
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

module.exports = connectDB

