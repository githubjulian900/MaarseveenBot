
  
 const { Client, Intents, Collection, MessageEmbed } = require("discord.js")
const config = require("../config.json")
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]

module.exports.run = async (bot, message, args) => {
client.once("ready", () => {
	console.log(client.user.username, 'is online')
	client.user.setActivity("loding", { type: "WATCHING" })
   setTimeout(function(){
  	client.user.setActivity("To Maarseveen", { type: "WATCHING" })
}, 10000);

}   


module.exports.help = {
name: "slash",
Category: "General",
desciption: "Hallo Command"
