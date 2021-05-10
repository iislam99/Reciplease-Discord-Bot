module.exports = {
    name: 'help',
    description: 'list of all commands and their functions',
    execute(message, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#DE3163')
        .setTitle('Welcome to Reciplease!')
        .setDescription('Reciplease is a bot that helps you find a recipe for a meal based on your preferences. The following is a list of all commands available:')
        .setThumbnail('https://cdn.pixabay.com/photo/2013/07/13/12/50/cake-160450_1280.png')
        .addFields(
            { name: '`!rec start`', value: 'Starts the questionnaire process to find a recipe.' },
            { name: '`!rec search <your search here>`', value: 'Finds recipes based on whatever you search.\nExample: !rec search fried rice' },
        );

        message.channel.send(helpEmbed);
    }
}