
const {Client, Discord, MessageEmbed, Intents} = require("discord.js")



const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]
})


module.exports.run = async (bot, message, args) => {
const bottie = client
const embed = new MessageEmbed()
.setTitle("Info")
.setDescription("BotInformatie")
.setFields(
	{name: "Botnaam", value: bottie.name},
    {name: "Bot Owner", value: bottie.Owner},
	)


.setThumbnail(guild.iconURL())
.setColor("RANDOM")

message.reply({embeds: [embed]})
    
}   


module.exports.help = {
name: "botinfo",
Category: "Info",
desciption: "info command" 
}   