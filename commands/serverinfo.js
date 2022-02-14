
const {Client, Discord, MessageEmbed, Intents} = require("discord.js")



const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]
})


module.exports.run = async (bot, message, args) => {
const { guild } = message.guild
console.log(guild)

const {name } = guild.name
const { regio }  guild.region
const { owner}  guild.owner
const { members } guild.memberCount

const icon = message.guild.iconURL

console.log(name, region, membercount)

const embed = new MessageEmbed()

.setTitle(`Server info Voor ${name}`)
.setThumbnail(icon)
.addfield("test", `regio`)

message.channel.send({embeds: [embed]})
}  



module.exports.help = {
name: "serverinfo",
Category: "Info",
desciption: "info command" 
}   
