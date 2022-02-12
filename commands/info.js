
const {Client, Discord, MessageEmbed, Intents} = require("discord.js")



const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]
})


module.exports.run = async (bot, message, args) => {
const guild = message.guild
const embed = new MessageEmbed()
.setTitle("Info")
.setDescription("ServerInformatie")
.setFields(
	{name: "ServerNaam", value: guild.name},
	{name: "ServerOwner", value: guild.owner}
	)


.setThumbnail(guild.iconURL())
.setColor("RANDOM")

message.channel.send({embeds: [embed]})
    
}   


module.exports.help = {
name: "info",
Category: "Info",
desciption: "info command" 
}   