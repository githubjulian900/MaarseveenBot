

module.exports.run = async (bot, message, args) => {
  const discord = require("discord.js")
   
  message.reply("Herstart over 10  sec")
  await sleep(1000);
  message.reply("Herstart")
}
       
        



module.exports.help = {
name: "herstart",
Category: "General",
desciption: "Hallo Command"
}
