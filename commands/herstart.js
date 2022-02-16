const { Permissions } = require('discord.js');
const member = message.author
if (member.permissions.has(Permissions.FLAGS.ADMINISTARTOR)) {
	message.channel.send("Herstart in 10 sec")
  wait(10)
  message.channel.send("Herstart")
}
