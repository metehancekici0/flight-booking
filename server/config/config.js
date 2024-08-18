// config/config.js
module.exports = {
    api: {
        hostname: 'api.schiphol.nl',
        appId: process.env.APP_ID,
        appKey: process.env.APP_KEY,
        resourceVersion: 'v4',
    },
    port: process.env.PORT
};