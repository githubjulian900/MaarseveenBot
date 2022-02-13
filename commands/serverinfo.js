
const {Client, Discord, MessageEmbed, Intents} = require("discord.js")



const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]
})


module.exports.run = async (bot, message, args) => {
const { guild } = message.guild
console.log(guild)

const {name, region, membercount, owner} = guild
const icon = message.guild.iconURL

console.log(name, region, membercount)

const embed = new MessageEmbed()

.setTitle(`Server info Voor ${name}`)
.setThumbnail(icon)
.addField("Regio", `${region}`)
.addField("Members", `${membercount}`)
.addField("Eigenaar", `${owner}`)

message.channel.send({embeds: [embed]})
}  



module.exports.help = {
name: "serverinfo",
Category: "Info",
desciption: "info command" 
}   