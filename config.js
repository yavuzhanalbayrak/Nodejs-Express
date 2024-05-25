const dotenv = require('dotenv').config();

const config = {
    port: process.env.API_PORT || 5000,
    connectionString: process.env.CONNECTION_STRING,
}


module.exports = { config };
