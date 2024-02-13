const Discord = require("discord.js")

const TOKEN = "MTIwNjIxNTYzMTI1NTYzODAzNg.GMwwY0.yEcJMjG5Tur6N8uhKocTlXSOr0PCE4bGS8qc40"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) =>{
    if(message.content == "hi") {
        message.reply("Halo")
    }
})

client.login(TOKEN)