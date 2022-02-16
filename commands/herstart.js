

module.exports.run = async (bot, message, args) => {

   
const { Permissions } = require('discord.js');
const member = message.author
if (member.permissions.has(Permissions.FLAGS.ADMINISTARTOR)) {
	message.channel.send("Herstart in 10 sec")
  wait(10)
  message.channel.send("Herstart")
}
       
        
}   


module.exports.help = {
name: "herstart",
Category: "General",
desciption: "Hallo Command"
}
