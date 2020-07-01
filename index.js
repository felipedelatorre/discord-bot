const Discord = require('discord.js')
const bot = new Discord.Client();

const token = 'NzIzNjM1NzEwMzI5ODgwNjE3.Xu0kEg.3ProroJuG6upSiM3pqpGndmy-u4';


bot.on('ready', ()=> {
  console.log('This bot is online');
})


bot.on('message', msg =>{
  if(msg.content === "HELLO"){
    msg.reply('HELLO FRIEND!')
  }
})
bot.login(token);