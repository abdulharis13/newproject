require('dotenv').config();

const config = {
    host: process.env.HOST,
    port: process.env.PORT,
    privateKey: process.env.KEY
};

module.exports = config;