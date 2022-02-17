


module.exports.run = async (client, member) => {
  
const {Collection} = require('discord.js')
let privateVoice = new Collection()
config = require('../config.json');

module.exports = async (client, oldState, newState)=>{
  const user = await client.users.fetch(newState.id)
  const member = newState.guild.members.fetch(user)
  if(!oldState.channel && newState.channel.id === (config.createChannel)){
    const channel = await newState.guild.channels.create(user.tag,{
      type: "GUILD_VOICE",
      parent: newState.channel.parent
    })
      member.voice.setChannel(channel);
      privateVoice.set(user.id, channel.id)
  }
    };

}

module.exports.help = {
name: "voice"
}
