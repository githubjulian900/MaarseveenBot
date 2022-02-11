const { Client, Intents, Collection, MessageEmbed } = require("discord.js")
const config = require("./config.json")
const fs = require("fs");


const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]
})


client.commands = new Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.help.name, command);

	console.log(`de file ${command.help.name}.js is geladen`)
}




client.on("guildMemberAdd", member => {
	


    var role =  member.guild.roles.cache.get("931671907445649519")
    
    if(!role ) return
    
    member.roles.add(role)
    
    var channelWelkom = member.guild.channels.cache.get('929391404046749696')
    
    if(!channelWelkom) return;
    
channelWelkom.send(`Member: ${member}`)

    const welkomembed = new MessageEmbed()
.setColor("RED")
.setTitle(`Welkom op de server`)
.setDescription(`We hebben nu ${member.guild.memberCount} Leden`)


channelWelkom.send({embeds: [welkomembed]})
    })
	
	
client.once("ready", () => {
	console.log(client.user.username, 'is online')
	client.user.setActivity("To Maarseveen", { type: "WATCHING" })
})


    


client.on("messageCreate", async message => {
	if (message.author.bot) return

	var prefix = config.prefix 

	var messagearray = message.content.split(" ");

	var command = messagearray[0]



	if (!message.content.startsWith(prefix)) return

	const commanddata = client.commands.get(command.slice(prefix.length))

	if (!commanddata) return console.log(`er is geen ${commanddata}`)

	var arguments = messagearray.slice(1)


	try {

		await commanddata.run(client, message, arguments)


	} catch (error) {
		console.log(error)
		await message.reply("error")
	}
})
client.login(process.env.token)