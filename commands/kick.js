const disocrd = require("discord.js")

module.exports.run = async (bot, message, args) => {


if(!message.author.hasPermissions("KICK_MEMBERS")) return message.channel.send("JIJ NIET MOGEN")


}


module.exports.help = {
name: "Kick",
Category: "General",
desciption: "Hallo Command"
}