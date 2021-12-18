const ayarlar = require("../ayarlar.json");
const talkedRecently = new Set();
const db = require("quick.db")
const Discord = require("discord.js")
module.exports = message => {
  let client = message.client;

  if (message.author.bot) return;

  if (!message.content.startsWith(ayarlar.prefix)) return;


  let command = message.content.split(" ")[0].slice(ayarlar.prefix.length);


  let params = message.content.split(" ").slice(1);

  let perms = client.elevation(message);

  let cmd;


  if (!client.commands.has(command)) {
    if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    } else {
}}

  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));

  }

  if (cmd) {
    cmd.run(client, message, params, perms);
  }
};