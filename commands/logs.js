
module.exports.run = async (bot, message, args) => {



const { Client, Intents, Collection, MessageEmbed } = require("discord.js")


const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]
})

const logchannel = client.guilds.cache.get("940231367986401280")



client.on('messageDelete', async message => {
	// Ignore direct messages
	if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
	// Since there's only 1 audit log entry in this collection, grab the first one
	const deletionLog = fetchedLogs.entries.first();

	// Perform a coherence check to make sure that there's *something*
	if (!deletionLog) return console.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);

	// Now grab the user object of the person who deleted the message
	// Also grab the target of this action to double-check things
	const { executor, target } = deletionLog;

	// Update the output with a bit more information
	// Also run a check to make sure that the log returned was for the same author's message
	if (target.id === message.author.id) {
		console.log(`A message by ${message.author.tag} was deleted by ${executor.tag}.`);
	} else {
		console.log(`A message by ${message.author.tag} was deleted, but we don't know by who.`);
	}
});
}

module.exports.help = {
    name: "logs",
    Category: "General",
    desciption: "Hallo Command"
}
