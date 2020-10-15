const express = require('express'); // library express 

const mongoose = require('mongoose');
const { host, port } = require('../../config');
const dbConnect = require('../connection/dbconnect');
const router = require('../routers');


const app = express(); // library express
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
dbConnect(mongoose);
router(app);

app.listen(3000, () => console.log(`server running at http://localhost:3000`)); // port
