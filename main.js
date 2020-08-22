
const RhythmBot = require('./src/rhythm-bot.js');
const logger = require('./src/logger.js');

const bot = new RhythmBot({
    command: {
        symbol: 'Twix' // command symbol trigger
    },
    discord: {
        token: '<NTcxNDQxMTExNDExOTgyMzQ2.XMNyIQ.Xl82k6QWdwIHPVUGxYDZnCGIknA>'//,
        // manage: {
        //     channels: [ 
        //         // Example text channel manager, limits media channel to 5 posts, limit should probably be less than 100 to avoid bugs
        //         { name: 'media', limit: 5 }  
        //     ]
        // }
    }
});

bot.connect()
    .then(() => { 
        logger.log('Listening');
        bot.listen();
    })
    .catch(err => {
        logger.error(err);
    });
