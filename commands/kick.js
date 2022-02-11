const disocrd = require("discord.js")

module.exports.run = async (bot, message, args) => {

 
    if(!message.member.permissons.has("KICK_MEMBERS")){
        return await message.channel.reply("JIJ DIT NIET MOGEN")
    }

    if(!message.guild.me.permissons.has("KICK_MEMBERS")){
        return message.reply("JIJ DIT NIET MOGEN")
    }
if(!args[0]) return message.reply("naam...........")
if(!args[1]) return message.reply("reden...........")



var kickuser = message.guid.members.cache.get(message.memtions.users.first().id || message.guild.members.get(args[0].id))



if(!kickuser) return message.reply("Persoon kan niet worden gevonden")  

if(kickuser.permissons.has("MANAGE_MEMBERS")) return message.reply("JIJ NOG STEEDST NIET MOGEN")

var reden = args.slice(1).join(" ")


var embedpromt = new disocrd.MessageEmbed()
.setColor("GREEN")
.setTitle("je hebt 30 sed suc6")
.setDescription(`Druk je ja? dan kick je : ${kickuser}`)

var embed = new disocrd.MessageEmbed()
.setColor("RED")
.setDescription(`**Gekickt**: ${kickuser} (${kickuser.id})
**Gekickt door:** ${message.author}
**Reden:** ${reden}
`)
.setFooter(message.member.displayName)
.setTimestamp()

message.channel.send({ embeds: [embedpromt] }).then(async msg => {
 
    let authorID = message.author.id;
    let time = 30;
    let reactions = ["✅", "❌"];
 
    // We gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
    time *= 1000;
 
    // We gaan iedere reactie meegegeven onder de reactie en deze daar plaatsen.
    for (const reaction of reactions) {
        await msg.react(reaction);
    }
 
    // Als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
    // dan kunnen we een bericht terug sturen.
    const filter = (reaction, user) => {
        return reactions.includes(reaction.emoji.name) && user.id === authorID;
    };
 
    // We kijken als de reactie juist is, dus met die filter en ook het aantal keren en binnen de tijd.
    // Dan kunnen we bericht terug sturen met dat icoontje dat is aangeduid.
    msg.awaitReactions({ filter, max: 1, time: time }).then(collected => {
        var emojiDetails = collected.first();
 

if (emojiDetails.emoji.name === "✅") {


    msg.delete();

    kickuser.kick(reden).catch(err => {
        if (err) return message.reply("errorones")
    })

message.channel.send({embeds: [embed]});


} else if (emojiDetails.emoji.name === "❌") {


    msg.delete();


    message.channel.send(`Kick Gestopt ${kickuser} is niet gekickd`).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 5000 )
})}


        
    });
});



}


module.exports.help = {
name: "Kick",
Category: "General",
desciption: "Hallo Command"
}