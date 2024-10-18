const express = require('express')
const dotenv = require('dotenv')


dotenv.config({ path:'./config/.env'})

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send('Connect to kimte!');
  });


app.listen(PORT,
    console.log(`'Server running is ${process.env.NODE_ENV} mode on port ${PORT}'`)
)