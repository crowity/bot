const Discord = require("discord.js");
exports.run = async (client, message, args) => {

message.channel.send("sa")

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
