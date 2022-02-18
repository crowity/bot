const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767});
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
const db = require("quick.db");
const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};
require("./util/eventLoader")(client);

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on("warn", e => {
  console.log(e.replace(regToken, "that was redacted"));
});
client.on("error", e => {
  console.log(e.replace(regToken, "that was redacted"));
});

client.slashcommands = new Discord.Collection()
 

client.on("ready", () => {
log("Slash (/) komutları yüklenmeye başlandı.")
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
client.slashcommands.set(command.data.name, command)
log("/" + command.data.name)
  client.guilds.cache.forEach(siy => { 
    
  client.guilds.cache.get(siy.id).commands.create(command.data.toJSON());
    }) 
}
log("Slash (/) komutları yüklendi.")

})

client.login(process.env.token);

