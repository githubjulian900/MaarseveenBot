const disocrd = require("discord.js")

module.exports.run = async (bot, message, args) => {

  
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Invalid Permissions")
    let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if (!User) return message.channel.send("Invalid User")
    if (User.hasPermission("KICK_MEMBERS")) return message.reply("Invalid Permissions")
    let kickreden = args.join(" ").slice(22);
    if (!kickreden) {
      kickreden = "None"
    }
    
    User.kick({reason: kickreden})
}


module.exports.help = {
name: "Kick",
Category: "General",
desciption: "Hallo Command"
}