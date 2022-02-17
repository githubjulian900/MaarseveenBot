

module.exports.run = async (bot, message, args) => {

	
client.once("ready", () => {

	
	console.log(client.user.username, 'is online')
	client.user.setActivity("loding", { type: "WATCHING" })
   setTimeout(function(){
  	client.user.setActivity("To Maarseveen", { type: "WATCHING" })
}, 10000);

}   

)}
module.exports.help = {
name: "slash",
Category: "General",
desciption: "Hallo Command"
}