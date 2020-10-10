const { token, prefix } = require("./config.json")

const discord = require("discord.js")
const client = new discord.Client();

client.on("ready", message => {
  console.log("I am a bot") 
  client.user.setActivity(`I am a bot`, {type: "PLAYING"} ) 
 })

client.on("message", message => {
  if(message.content === `${prefix}ping`) {
    return message.channel.send(`🏓 Pong! ${client.ws.ping}ms`)
  } 
})

client.login(token)
