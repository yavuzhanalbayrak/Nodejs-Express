const dotenv = require('dotenv').config();

const config = {
    port: process.env.API_PORT || 5000,
    connectionString: process.env.CONNECTION_STRING,
    accessToken: process.env.ACCESS_TOKEN_SECRET,
}


module.exports = { config };
