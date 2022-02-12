const { mongopath } = require('./config.json')

module.exports = async () => {

await mongoose.connect(mongopath, {
useNewUrlPaser: true,
useUnifiedTopology: true,
// useFindAnyModify: false
})

return mongoose

}

mongoose.connection.on("connected", () => {
    console.log('hi')
})