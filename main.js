const Discord = require('discord.js');

const client = new Discord.Client();
const TOKEN = '';

// All commands in server must start with this to execute
const prefix = '!rec ';

// Making sure files in commands folder are .js files
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// Looping through command files to make sure correct files are obtained for commands
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Logging in bot
client.once('ready', () => {
    console.log('Reciplease is online!');
    client.user.setActivity('!rec help');
});

// Total number of results allowed for each recipe list
const total_results = 50;

// Event handling
client.on('message', message => {
    // Checks if message starts with "!rec " or is sent by bot
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === 'help') {
            client.commands.get('help').execute(message, Discord);
    } else if (command === 'start') {
        client.commands.get('start').execute(message, Discord, client, total_results);
    } else if (command === 'search') {
        if (args.length != 0) {
            client.commands.get('search').execute(message, args, Discord, client, total_results);
        }
    }
    // Testing API fetch
    // else if (command === 'fetch') {
    //     client.commands.get('fetch').testFetch(message, Discord, client, total_results);
    // }
});

client.login(TOKEN);
