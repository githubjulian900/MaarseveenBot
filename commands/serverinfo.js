
const {Client, Discord, MessageEmbed, Intents} = require("discord.js")



const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]
})


module.exports.run = async (bot, message, args) => {
const { guild } = message
// console.log(guild)


const { name, region, MemberCount, AfkTimeout, owner } = guild
const icon = guild.iconURL()
console.log(name, region, MemberCount, guild, owner)

message.channel.send(` ${message.author.tag} We zijn bezig met deze commands graag niet uitvoeren onze logs spammen namelijk vol Gr, Julian!`)


const embed = new MessageEmbed()
.setTitle(`Server Informatie voor ${name}`)
.setThumbnail(icon)

.addfield("Regio", `${region}`)
.addfield("Members", `${MemberCount}`)
.addfield("Eigenaar", `${owner}`)


message.channel.send({embeds: [embed]})


}   



module.exports.help = {
name: "serverinfo",
Category: "Info",
desciption: "info command" 
}   
