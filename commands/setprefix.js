const { Permissions } = require('discord.js');
const mongoose = require("mongoose")
module.exports.run = async(client, message, args, prefix) => {
     
        if(!message.content.startsWith(prefix)) return;
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send(`You dont have permission to use this command`)
        const newprefix = args[0]
        if(!newprefix) return message.channel.send(`Enter a valid prefix`)
        if(newprefix.length > 5) return message.channel.send(`Invalid prefix, The prefix you provided is greater that 5 digits/alphabates`)
        message.channel.send(`The prefix is been set to **${newprefix}**`)
        mongoose.set(`prefix_${message.guild.id}`, newprefix)
    }
    module.exports.help = {
        name : 'setprefix',
        description : 'set prefix per server',
    }