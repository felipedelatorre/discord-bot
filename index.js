require('dotenv').config();

const Discord = require('discord.js');
const { randomMap } = require('./commands/randomMap');
const { giveMisions } = require('./commands/giveMission');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  const input = msg.content.split(' ');
  const command = input[0];
  let reply = '';

  if (command === 'randommap') {
    const options = input[1];

    reply = randomMap(options);

    msg.reply(reply);
  }

  if (command === 'givemission') {
    const options = input[1];

    reply = giveMisions(options);
    msg.reply(reply);
  }

  if (command === 'killaCommands') {
    reply =
      '\n[randommap] \n --- \n [randommap <initial of map>] ex. [randommap il] for random map between interchange and reserve \n i = interchange, f = factory, w = woods, c = customs, r = reserve, s = shoreline, l = lab\n You can add more of the same letter to tip the randomness to a certain favor ex. [randommap lllc]. There will be a 20% change of picking customs';

    msg.reply(reply);
  }
});

client.login(process.env.DISCORD_TOKEN);
