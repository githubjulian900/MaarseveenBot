
const {Client, Discord, MessageEmbed, Intents} = require("discord.js")



const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS]
})


module.exports.run = async (bot, message, args) => {
 const guild = message.guild
	const owner = await message.guild.fetchOwner()   
	const icon = guild.iconURL()
    let guildDescription = guild.description
    if (!guildDescription) {
      guildDescription = 'None'
    }

    const embed = new MessageEmbed()
    .setTitle('serverinfo')
    	.setThumbnail(icon)
    .addFields({
                name: 'Name',
                value: guild.name,
                inline: true
              },
              {
                name: 'ID',
                value: guild.id,
                inline: true
              },
          
              {
                name: 'Created at',
                value: guild.createdAt.toDateString(),
                inline: true
              },
              {
                name: 'Owner',
                value: owner.user.tag,
                inline: true
              },
              {
                name: 'Member Count',
                value: guild.memberCount.toString(),
                inline: true
              },
              {
                name: 'Boosts',
                value: guild.premiumSubscriptionCount.toString(),
                inline: true
              },
              {
                name: 'Boost Level',
                value: guild.premiumTier,
                inline: true
              })

    message.reply({ embeds: [embed] })

}   



module.exports.help = {
name: "serverinfo",
Category: "Info",
desciption: "info command" 
}   
