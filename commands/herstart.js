const { Permissions } = require('discord.js');

if (member.permissions.has(Permissions.FLAGS.ADMINISTARTOR)) {
	message.channel.send("Herstart in 10 sec")
  wait(10)
  message.channel.send("Herstart")
}
