

module.exports.run = async (bot, message, args) => {
  const discord = require("discord.js")
   

	message.channel.send("Herstart in 10 sec")
  wait(10)
  message.channel.send("Herstart")
}
       
        



module.exports.help = {
name: "herstart",
Category: "General",
desciption: "Hallo Command"
}
