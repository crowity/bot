const Discord = require("discord.js")
module.exports = function Embed(Title, Description, fields, color){



const Embed = new Discord.MessageEmbed()

if(Title){
Embed.setTitle(Title)
}

if(Description){
Embed.setDescription(Description)
}

if(fields){
fields.forEach(field => {
Embed.addField(field.a, field.b)
})
}

if(color){
Embed.setColor(color)
} else Embed.setColor("RANDOM")









}



