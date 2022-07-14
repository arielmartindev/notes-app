const config = {
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    ATLAS: process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD

}

module.exports = config