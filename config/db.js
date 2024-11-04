
const mongoose = require('mongoose');
const colors = require('colors')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        
        console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.bold);
        console.log(`Database Name: ${conn.connection.name}`.cyan.bold);
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

module.exports = connectDB

