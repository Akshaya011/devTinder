const mongoose = require("mongoose")

const URL = 
    "mongodb+srv://akshaya:U1hwxQnYCz8y7GmW@cluster0.qujva.mongodb.net/devTinder"

const connectdb = async () => {
    await mongoose.connect(URL);
}
module.exports = connectdb;
