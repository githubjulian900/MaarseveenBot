const { Discord } = require("discord.js")


module.exports.run = async (bot, message, args) => {
  message.reply("Herstart over 10  sec")
  setTimeout(function(){
  message.reply("Herstart")
}, 10000);
}
       
        



module.exports.help = {
name: "herstart",
Category: "General",
desciption: "Hallo Command"
}
