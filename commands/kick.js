const disocrd = require("discord.js")

module.exports.run = async (bot, message, args) => {

 
    if(!message.author.permissons.has("KICK_MEMBERS")){
        return await message.channel.reply("JIJ DIT NIET MOGEN")
    }


}


module.exports.help = {
name: "Kick",
Category: "General",
desciption: "Hallo Command"
}