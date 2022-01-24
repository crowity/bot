const reqEvent = event => require(`../events/${event}`);
module.exports = client => {
  client.on("ready", () => reqEvent("ready")(client));
  client.on("messageCreate", reqEvent("message"));
};
// Star Coders kanalına abone olmayı unutmayın.
