module.exports.run = async (client, member) => {
    console.log('Member Joined');
    let channel = client.channels.cache.get('929391404046749696');

    let { user } = member;

        var role =  member.guild.roles.cache.get("931671907445649519")
    
    if(!role ) return message.channel.send("Role bestaat niet")
    
    user.roles.add(role)
    
    var name = user.tag;

    let embed = new MessageEmbed()
    .setTitle('Welcome')
    .setDescription('Have a nice time, ' + name)
    channel.send({embeds: [embed] })

}

module.exports.help = {
name: "playerjoin"
}
