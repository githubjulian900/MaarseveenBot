
const {Client, Discord, MessageEmbed, Intents} = require("discord.js")



const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]
})


module.exports.run = async (bot, message, args) => {
const { guild } = message
// console.log(guild)


const { name, region, MemberCount, } = guild
const icon = guild.iconURl()

console.log(name, region, MemberCount, icon)

}   



module.exports.help = {
name: "serverinfo",
Category: "Info",
desciption: "info command" 
}   
