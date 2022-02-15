
const {Client, Discord, MessageEmbed, Intents} = require("discord.js")



const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]
})


module.exports.run = async (bot, message, args) => {
const { guild } = message
// console.log(guild)


const { name, region, MemberCount, } = guild

console.log(name, region, MemberCount, guild)

message.channel.send("We zijn bezig met deze commands graag niet uitvoeren onze logs spammen namelijk vol Gr, Julian!", message.author.tag)

}   



module.exports.help = {
name: "serverinfo",
Category: "Info",
desciption: "info command" 
}   
