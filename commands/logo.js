
module.exports.run = async (bot, message, args) => {
const icon = message.guild.iconURL()

   message.reply(icon)


        
}   


module.exports.help = {
name: "logo",
Category: "General",
desciption: "Hallo Command"
}
