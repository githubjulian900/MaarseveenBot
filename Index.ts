import DiscordJS, { Intents } from "discord.js"


const client = new DiscordJS.Client({
intents: [
Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES
]
)}

client.on("ready" () => {
console.log("Bot")
const guildid = '928379498079084554'
const guild = client.guilds.cache.get(guildid)
let commands


if(guild) {
commands = guild.commands
} else  {
commands = application.commands
}

 
})

client.on("messageCreate" (message) => {
if(message.content === 'ping') {
message.reply({
content: 'pong'
)}
}
})

client.login(process.env.token)

