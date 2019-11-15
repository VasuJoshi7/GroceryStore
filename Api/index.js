const express = require('express');
const router = express.Router();
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors')

//import routes
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const categoryRoute = require('./routes/category');
const orderRoute = require('./routes/order');

//Route middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.use('/api/product', productRoute);
app.use('/api/category',categoryRoute);
app.use('/api/order',orderRoute);



//Connect to mongoDb cloud databse
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to database");
});








app.listen(5000, () => { console.log("server started runnin on port 5000") });

