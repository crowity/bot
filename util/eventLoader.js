module.exports = client => {

const load = event => client.on(event, require(`../events/${event}.js`))
load("message")
load("ready")
};
