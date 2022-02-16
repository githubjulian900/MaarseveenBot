const { Client, Intents, Collection, MessageEmbed } = require("discord.js")
const config = require("./config.json")
const fs = require("fs");

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]
	
})


module.exports.Client = Client
require('./dblogin')


client.commands = new Collection();
client.events = new Collection();
client.info = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.help.name, command);

	console.log(`Command ${command.help.name}.js is geladen`)
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
		client.events.set(event.help.name, event);

  console.log(`Event ${event.help.name}.js is geladen`)
};



	


    
 
	
	
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

