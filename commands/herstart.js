const { Discord } = require("discord.js")


module.exports.run = async (bot, message, args) => {
  message.reply("Herstart over 10  sec")
  setTimeout(function(){
  message.reply("Herstart")
}, 10000);
setTimeout(function(){
  message.reply("De herstart Is (waarschijnlijk) gelukt! De bot is online!")
}, 60000);
}
       
        



module.exports.help = {
name: "herstart",
Category: "General",
desciption: "Hallo Command"
}
