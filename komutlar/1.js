const Discord = require("discord.js");
const Embed = require("../embed.js")
exports.run = async (client, message, args) => {
let prefix = require("../ayarlar.json").prefix
const embed = Embed("Merhaba ben " + client.user.username,"Prefixim: " + require("../ayarlar.json").prefix + "\nKomutlarım şunlar: ","info")
client.commands.forEach(cmd => {
embed.addField(`${prefix}${cmd.help.name}`, `${cmd.help.description}`)
})
message.reply({embeds: [embed]})
// Star Coders kanalına abone olmayı unutmayın.

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y","help","h","yardım"," "],
  permLevel: 0
};

exports.help = {
  name: "yardim",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};
