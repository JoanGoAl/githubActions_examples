const express = require('express')
const app = express()
const port = 3000


// bot name -> telegramJoan
// username -> telejoanbot
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, {polling: true});

// Message when the bot is started
bot.onText(/\/start/, (msg) => {
    const chatId = process.env.TELEGRAM_CHAT_ID
    bot.sendMessage(chatId, 'Workflow ejecutado correctamente tras el último commit. Saludos Joan González. 🤖');
});


bot.on('message', (msg) => {
    const chatId = process.env.TELEGRAM_CHAT_ID ;
    bot.sendMessage(chatId, 'Mensaje enviado');
});


app.get('/', (req, res) => {
    res.send('Hello World! 🤌')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} 🚀`)
})