const {Client, Discord, MessageEmbed, Intents} = require("discord.js")



const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]
})


module.exports.run = async (bot, message, args) => {
 const guild = message.guild
	const owner = await message.guild.fetchOwner()    
    let guildDescription = guild.description
    if (!guildDescription) {
      guildDescription = 'None'
    }

    const embed = new MessageEmbed()
    .setTitle('Membercount')
    .addFields({
                name: 'Membercount',
                value: guild.memberCount.toString(),
                inline: true
              }

              })

    message.reply({ embeds: [embed] })

}   



module.exports.help = {
name: "members",
Category: "Info",
desciption: "info command" 
}   

