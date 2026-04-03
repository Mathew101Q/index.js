const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'JMCORESMP.play.hosting', // Example: jmcoresmp.aternos.me
        port: 25565,           // Usually 25565
        username: 'AFK_Bot',   // The name of your bot
        version: '1.20.1'      // Change to your server's version
    });

    bot.on('login', () => {
        console.log('Bot has logged in!');
    });

    // Anti-AFK: Makes the bot jump every 30 seconds
    setInterval(() => {
        bot.setControlState('jump', true);
        setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);

    // Auto-reconnect if kicked
    bot.on('end', () => {
        console.log('Disconnected. Reconnecting in 5 seconds...');
        setTimeout(createBot, 5000);
    });
}

createBot();
