import  DiscordJS, {  Intents }  from "discord.js"


const client = new DiscordJS.Client({
    intents:
        [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_MESSAGE_REACTIONS
        ]
})

client.on("ready", () => {
    console.log("Ready");

    const guildid = ("928379498079084554")
    const guild = client.guilds.cache.get(guildid)


    let commands

    if (guild) {
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
                name: 'num1',
                description: '1',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER

            },
            {
                name: 'num2',
                description: '2',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER

            },
        ]
    })
})
client.on("InteractionCreate", async (interaction) => {
    if (interaction.Iscommand()) {
        return
    }
    const { commandName, options } = interaction

    if (commandName === 'ping') {
        interaction.reply({
            content: 'pong',
            ephemeral: true,
        })
    } else if (commandName === 'som') {
        interaction.reply({
            content: `Het andwoord is ${options.num1 + options.num2}`
        })
    }
})

client.login(process.env.token)
