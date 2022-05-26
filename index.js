const telegramBot = require('node-telegram-bot-api');
const {Telegraf} = require('telegraf');
require('dotenv').config();


const BOT_TOKEN = process.env.BOT_TOKEN;


const bot = new Telegraf(BOT_TOKEN);

const helpMessage = ` 
    Get started with CredPay Bot
    /start -> Start bot
    /help -> guide you through the bot and commands you can use
    /settings
`;

bot.start(async(ctx) =>{
    ctx.reply('Hello, Welcome to CredPay');
    ctx.reply(helpMessage);
    ctx.telegram.sendMessage(ctx.chat.id, 'You can visit our web site @ www.credpay.com to find out more about this bot');
    
});

bot.help(async(ctx) =>{
    ctx.reply(`The following commands available: 
    /start-> Welcome message, 
    /help-> this message, 
    /settings
    `);
});

bot.settings(async(ctx) =>{
    ctx.reply('How would you like us to help?');
});

bot.hears(['hi', 'hello', 'Hello', 'Hi'], (ctx) =>{ 
    ctx.reply('Hey there, how may I help you')
});

bot.command('oldschool', (ctx) =>{ 
    ctx.reply('Hello')
});

bot.command('content', (ctx) =>{ 
    ctx.reply('check our website to know more about this bot @ www.credpay.com')
})

bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

const Credo = require('credo-node');

// You should store your API key as an environment variable
const secretKey = process.env.CREDO_SECRET_KEY
const publicKey = process.env.CREDO_PUBLIC_KEY

// When your environment is "development" or "local", the SDK will use the sandbox API
const environment = process.env.NODE_ENV
const credo = new Credo(secretKey, environment);
