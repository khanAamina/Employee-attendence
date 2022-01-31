const http = require('http');


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');

const app= express();
const dotenv = require('dotenv')
const connectDB = require('./utlis/db');
dotenv.config({path: './utlis/config.env'})
const employee = require('./routes/mainRoute.js')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());

app.set('view engine', 'ejs')
app.set('views' ,'views')

const server = http.createServer(app);

connectDB();
//routes
app.use('/',employee);

server.listen(3000);

