const Discord = require("discord.js")
let prefix = require("../ayarlar.json").prefix
const cooldowns = new Discord.Collection();

module.exports = message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const client = message.client
    const commandName = args.shift()

    const command =
        client.commands.get(commandName) ||
        client.commands.find(
            (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
        );
    if (!message.content.startsWith(prefix) || !command) return;
    if (command.guildOnly && message.channel.type == "DM")
        return message.channel.send(
            `Bu komudu sadece herhangi bir sunucuda kullanabilirsin.`
        );


    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const timestamp = cooldowns.get(command.name);
    const now = Date.now();
    console.log(now);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamp.has(message.author.id)) {
        const expirationTime =
            timestamp.get(message.author.id) + cooldownAmount;
        if (expirationTime > now) {
            const timeLeft = (expirationTime - now) / 1000;
            const embed = new Discord.MessageEmbed()
                .setTitle("Cooldown aşımı tespit edildi")
                .setDescription(
                    `Bu komudu tekrar kullanabilmek için ${parseInt(
                        timeLeft
                    )} saniye bekleyin.`
                );
            return message.channel.send({ embeds: [embed] });
        }
    }
    timestamp.set(message.author.id, now);
    setTimeout(() => {
        timestamp.delete(message.author.id);
    }, cooldownAmount);

    try {
        command.execute(message, args, message.client);
    } catch (e) {
        console.error(e);
        message.channel.send("Bu kodda bir hata var galiba.");
    }

};