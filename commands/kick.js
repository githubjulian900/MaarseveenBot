const disocrd = require("discord.js")

module.exports.run = async (bot, message, args) => {


if(!message.author.hasPermissions("KICK_MEMBERS")) return message.channel.send("JIJ NIET MOGEN")
var player = message.mentions.first()
var reden = args[2]
if(message.author.hasPermissions("KICK_MEMBERS")) {
player.Kick({ reason: reden})
}
}


module.exports.help = {
name: "Kick",
Category: "General",
desciption: "Hallo Command"
}