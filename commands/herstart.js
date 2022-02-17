const { Discord } = require("discord.js")


module.exports.run = async (bot, message, args) => {
  const channel = client.guild.channels.get("943783374462529577")
  message.channel.send("Herstart over 10  sec")
  setTimeout(function(){
  message.channel.send("Herstart")
}, 10000);
setTimeout(function(){
  message.channel.send("De herstart Is (waarschijnlijk) gelukt! De bot is online!")
}, 60000);
}
       
        



module.exports.help = {
name: "herstart",
Category: "General",
desciption: "Hallo Command"
}
