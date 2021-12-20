const Discord = require("discord.js");
const Embed = require("../embed.js")
exports.run = async (client, message, args) => {
const embed = Embed


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
