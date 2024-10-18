const express = require('express')
const dotenv = require('dotenv')
const connectDB =require('./config/db')

dotenv.config({ path:'./config/.env'})

//connectDB
connectDB();

const home = require('./Routes/homeRoutes')

const app = express();
const PORT = process.env.PORT || 3001;


//Routes
app.use('/api/v1/home',home);


app.listen(PORT,
    console.log(`'Server running is ${process.env.NODE_ENV} mode on port ${PORT}'`)
)