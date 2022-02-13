const config = require("../config.json")
module.exports.run = async (bot, message, args) => {

         await message.reply (`mijn prefix is: ${config.prefix}`)
         

}


module.exports.help = {
    name: "prefix",
    Catogory: "general",
    desciption: "Prefix"
}