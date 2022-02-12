
const {Client, Discord, MessageEmbed, Intents} = require("discord.js")



const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]
})


module.exports.run = async (bot, message, args) => {

const embed = new MessageEmbed()
.setTitle("Info")
.setDescription("ServerInformatie")
.setFields(
	{name: "ServerNaam", value: message.member.guild.name},
	{name: "ServerMemberCount", value: messae.member.guild.membercount}
)
message.channel.send({embeds: [embed]})
    
}   


module.exports.help = {
name: "info",
Category: "Info",
desciption: "info command" 
}   