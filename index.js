const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'YOUR_SERVER_IP', // Example: jmcoresmp.aternos.me
        port: 25565,           // Your server port
        username: 'AFK_Bot',   // The bot's name
        version: '1.20.1'      // Your server version
    });

    bot.on('login', () => {
        console.log('Bot is online!');
    });

    // Anti-AFK: Makes the bot jump every 30 seconds
    setInterval(() => {
        bot.setControlState('jump', true);
        setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);

    // Auto-reconnect if kicked
    bot.on('end', () => {
        console.log('Bot disconnected. Reconnecting in 10 seconds...');
        setTimeout(createBot, 10000);
    });
}

createBot();
