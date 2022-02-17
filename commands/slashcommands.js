const { SlashCommandBuilder } = require('@discordjs/builders');



module.exports.run = async (bot, message, args) => {
data: new SlashCommandBuilder()
	.setname("ping")
	.setDesciption("PONG!")
	message.reply("PONG!")
	
}   


module.exports.help = {
name: "slash",
Category: "General",
desciption: "Hallo Command"
}
