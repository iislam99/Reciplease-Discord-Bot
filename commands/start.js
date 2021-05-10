module.exports = {
    name: 'start',
    description: 'Starts the questionnaire',
    async execute(message, Discord, client, total_results) {
        let introEmbed = new Discord.MessageEmbed()
        .setColor('#48C9B0')
        .setTitle('Welcome to the Reciplease Questionnaire!')
        .setDescription('You will be asked a series of questions that will help find you a recipe for a meal aligned with your preferences. For each question, press the reaction emoji that corresponds to the answer choice desired. You will have 15 seconds to answer each question.\n\nPress the checkmark reaction emoji within 20 seconds to get started.')
        .setImage('https://cdn.pixabay.com/photo/2013/07/13/12/50/cake-160450_1280.png');

        let introMessage = await message.channel.send(introEmbed);
        introMessage.react('✅');

        await introMessage.awaitReactions((reaction, user) => user.id === message.author.id && reaction.emoji.name === '✅', { max: 1, time: 20000 })
        .then(async collected => {
            if (collected.first().emoji.name === '✅') {
                client.commands.get('questions').execute(message, Discord, client, total_results);
            }
        }).catch(async () => { return message.channel.send('`Time\'s up.`') });
    }
}