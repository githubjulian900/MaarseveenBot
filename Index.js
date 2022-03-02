const  { Client, Intents } = require 'discord.js' 
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on("ready", () => {
    console.log("Ready");

    const guildid = ("928379498079084554")
    const guild = clinet.guilds.cache.get(guildid)


    let commands

    if(guild) {
        commands = guild.commands
    } else {
        commands = client.application.commands
    }

    commands.create({
        name: "Ping",
        description: "pong"
    })

    commands.create({
        name: "Plus Som",
        description: "Maakt een plus som",
        options: [
            {
                name: '',

            }
        ]
    })
})
client.on("InteractionCreate", async (interaction) => {
    if(interaction.Iscommand()) {
        return
    }
    const { commandName, options} = interaction

    if ( commandName === 'ping') {
        interaction.reply({
            content: 'pong',
            ephemeral: true,
        })
    } else if ()
})

client.login(process.env.token)
