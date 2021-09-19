require('dotenv').config()

const env = process.env.NODE_ENV;

const dev = {
    app: {
        port: 3000,
        host: 'localhost'
    },
    auth: {
        googleClientID: process.env.GOOGLE_CLIENT_ID,
        googleSecretKey: process.env.GOOGLE_SECRET_KEY
    }
};

const prod = {
    app: {
        port: process.env.PORT
    },
    auth: {
        googleClientID: process.env.GOOGLE_CLIENT_ID,
        googleSecretKey: process.env.GOOGLE_SECRET_KEY
    }
};

const config = {
    dev,
    prod
};

module.exports = config[env];