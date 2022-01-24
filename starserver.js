const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767});
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
const db = require("quick.db");
const util = require("./util/Util.js")
const sc = require("starcode.js")
const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

util.Start(client)
require("./util/eventLoader")(client);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Adet Komut Yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
let deneme = `${props.conf.aliases}`
let deneme2 = deneme.replace(",",", " + ayarlar.prefix)
    log(`${ayarlar.prefix}${props.help.name}, ${ayarlar.prefix}${deneme2}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
// Star Coders kanalına abone olmayı unutmayın.

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
// Star Coders kanalına abone olmayı unutmayın.

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on("warn", e => {
  console.log(e.replace(regToken, "that was redacted"));
});
client.on("error", e => {
  console.log(e.replace(regToken, "that was redacted"));
const client = new Discord.Client();
});

client.login(process.env.token).catch(err => {
if(!process.env.token){
console.log("Lütfen bir token gir")
process.exit(0)
} else if(err.toString().includes("TOKEN_INVALID")){
console.log("Lütfen düzgün bir token gir")
process.exit(0)
} else if(err.toString().includes("DISALLOWED_INTENTS")){
console.log("Lütfen tokenini girdiğin botun intentlerini aç (tek yapman gereken https://discord.com/developers/applications sayfasına girip bot kısmına girip alta inip tüm gri yerleri açıp mavi yap.)")
process.exit(0)
}
console.error(err)
process.exit(0)
})
// Star Coders kanalına abone olmayı unutmayın.
