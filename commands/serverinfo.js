
const {Client, Discord, MessageEmbed, Intents} = require("discord.js")



const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]
})


module.exports.run = async (bot, message, args) => {
const { guild } = message
console.log(guild)

const {name, region, membercount, owner} = guild
const icon = guild.iconURL

console.log(name, region, membercount)

console.log(owner)
}   


module.exports.help = {
name: "serverinfo",
Category: "Info",
desciption: "info command" 
}   