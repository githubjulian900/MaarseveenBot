const discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
   
  message.reply("Herstart over 10  sec")
   sleep(1000);
  message.reply("Herstart")
}
       
        



module.exports.help = {
name: "herstart",
Category: "General",
desciption: "Hallo Command"
}
