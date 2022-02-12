const mongoose = require("mongoose")
const config = require("./config.json")
module.exports = (client) => {
    client.dblogin = async () => {
mongoose.Promise = global.Promise;
await mongoose.connect(config.dbtoken, {
    useFindandModify: false,
    UseUnifiedTopology: true,
    useNewUrlParser: true,
})
    }
}

