require('dotenv').config();
const Discord = require('discord.js');
const { createData } = require('./src/data');
const CommandsHandler = require('./src/handlers/CommandsHandler.js');
const EventsHandler = require('./src/handlers/EventsHandler.js');
const permissions = require('./src/utils/permissions');

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.permissions = permissions;

function login() {
  client.login(process.env.TOKEN || 'ODYyMzQyMjE1NjQ5MzI5MTcy.YOW8xQ.SLb_olyBwj4rt2U7LAyOl2ni4VQ');
}

login();
createData();
new CommandsHandler(client).load();
new EventsHandler(client).load();