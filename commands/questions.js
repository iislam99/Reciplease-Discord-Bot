module.exports = {
    name: 'questions',
    description: 'Question 1 of the questionnaire',
    async execute(message, Discord, client, total_results) {
        const questionAnswers = ['', '', '', ''];

        // Question 1
        const question1 = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Question 1')
        .addFields( 
            { name: 'What type of diet are you on?', value: '1️⃣ None\n2️⃣ Keto\n3️⃣ Pescatarian\n4️⃣ Vegan\n5️⃣ Vegetarian'},
        );

        const questionMessage = await message.channel.send(question1);
        questionMessage.react('1️⃣');
        questionMessage.react('2️⃣');
        questionMessage.react('3️⃣');
        questionMessage.react('4️⃣');
        questionMessage.react('5️⃣');

        await questionMessage.awaitReactions((reaction, user) => user.id === message.author.id && (reaction.emoji.name === '1️⃣' || reaction.emoji.name === '2️⃣' || reaction.emoji.name === '3️⃣' || reaction.emoji.name === '4️⃣' || reaction.emoji.name === '5️⃣'), { max: 1, time: 15000 })
        .then(async collected => {
            if (collected.first().emoji.name == '1️⃣') {
                questionAnswers[0] = 'None';    
            } else if (collected.first().emoji.name == '2️⃣') {
                questionAnswers[0] = 'Keto';    
            } else if (collected.first().emoji.name == '3️⃣') {
                questionAnswers[0] = 'Pescatarian';    
            } else if (collected.first().emoji.name == '4️⃣') {
                questionAnswers[0] = 'Vegan';    
            } else if (collected.first().emoji.name == '5️⃣') {
                questionAnswers[0] = 'Vegetarian';    
            }
            
            // Question 2
            questionMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
            const question2 = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Question 2')
            .addFields( 
                { name: 'How long do you want to cook?', value: '1️⃣ Less than 1 hour\n2️⃣ More than 2 hours\n3️⃣ More than 5 hours\n4️⃣ More than 24 hours' },
            )
            .setFooter('✅ Diet: ' + questionAnswers[0]);

            await questionMessage.edit(question2);
            questionMessage.react('1️⃣');
            questionMessage.react('2️⃣');
            questionMessage.react('3️⃣');
            questionMessage.react('4️⃣');

            await questionMessage.awaitReactions((reaction, user) => user.id === message.author.id && (reaction.emoji.name === '1️⃣' || reaction.emoji.name === '2️⃣' || reaction.emoji.name === '3️⃣' || reaction.emoji.name === '4️⃣'), { max: 1, time: 15000 })
            .then(async collected => {
                if (collected.first().emoji.name == '1️⃣') {
                    questionAnswers[1] = 'Less than 1 hour';    
                } else if (collected.first().emoji.name == '2️⃣') {
                    questionAnswers[1] = 'More than 2 hours';    
                } else if (collected.first().emoji.name == '3️⃣') {
                    questionAnswers[1] = 'More than 5 hours';    
                } else if (collected.first().emoji.name == '4️⃣') {
                    questionAnswers[1] = 'More than 24 hours';     
                }

                // Question 3
                questionMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
                const question3 = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle('Question 3')
                .addFields( 
                    { name: 'What cuisine would you like to eat?', value: '1️⃣ American\n2️⃣ Asian\n3️⃣ Italian\n4️⃣ Middle Eastern\n5️⃣ South American' },
                )
                .setFooter('✅ Diet: ' + questionAnswers[0] +
                           '\n✅ Time: ' + questionAnswers[1]);

                await questionMessage.edit(question3);
                questionMessage.react('1️⃣');
                questionMessage.react('2️⃣');
                questionMessage.react('3️⃣');
                questionMessage.react('4️⃣');
                questionMessage.react('5️⃣');

                await questionMessage.awaitReactions((reaction, user) => user.id === message.author.id && (reaction.emoji.name === '1️⃣' || reaction.emoji.name === '2️⃣' || reaction.emoji.name === '3️⃣' || reaction.emoji.name === '4️⃣' || reaction.emoji.name === '5️⃣'), { max: 1, time: 15000 })
                .then(async collected => {
                    if (collected.first().emoji.name == '1️⃣') {
                        questionAnswers[2] = 'American';    
                    } else if (collected.first().emoji.name == '2️⃣') {
                        questionAnswers[2] = 'Asian';    
                    } else if (collected.first().emoji.name == '3️⃣') {
                        questionAnswers[2] = 'Italian';    
                    } else if (collected.first().emoji.name == '4️⃣') {
                        questionAnswers[2] = 'Middle Eastern';    
                    } else if (collected.first().emoji.name == '5️⃣') {
                        questionAnswers[2] = 'South American';    
                    }

                    // Question 4
                    questionMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
                    const question4 = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle('Question 4')
                    .addFields( 
                        { name: 'What type of meal would you like?', value: '1️⃣ Breakfast\n2️⃣ Lunch\n3️⃣ Dinner\n4️⃣ Snack' },
                    )
                    .setFooter('✅ Diet: ' + questionAnswers[0] +
                             '\n✅ Time: ' + questionAnswers[1] +
                             '\n✅ Cuisine: ' + questionAnswers[2]);

                    await questionMessage.edit(question4);
                    questionMessage.react('1️⃣');
                    questionMessage.react('2️⃣');
                    questionMessage.react('3️⃣');
                    questionMessage.react('4️⃣');

                    await questionMessage.awaitReactions((reaction, user) => user.id === message.author.id && (reaction.emoji.name === '1️⃣' || reaction.emoji.name === '2️⃣' || reaction.emoji.name === '3️⃣' || reaction.emoji.name === '4️⃣'), { max: 1, time: 15000 })
                    .then(async collected => {
                        if (collected.first().emoji.name == '1️⃣') {
                            questionAnswers[3] = 'Breakfast';    
                        } else if (collected.first().emoji.name == '2️⃣') {
                            questionAnswers[3] = 'Lunch';    
                        } else if (collected.first().emoji.name == '3️⃣') {
                            questionAnswers[3] = 'Dinner';    
                        } else if (collected.first().emoji.name == '4️⃣') {
                            questionAnswers[3] = 'Snack';     
                        }

                        // Final Answers
                        questionMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
                        const answers = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setTitle('Final Answers')
                        .setDescription( 
                            '✅ **Diet:** ' + questionAnswers[0] +
                        '\n\n✅ **Time:** ' + questionAnswers[1] +
                        '\n\n✅ **Cuisine:** ' + questionAnswers[2] +
                        '\n\n✅ **Meal:** ' + questionAnswers[3]
                        );
                        
                        await questionMessage.edit(answers);
                        const data = await client.commands.get('fetch').fetchData(questionAnswers, total_results);
                        client.commands.get('recipes').execute(message, Discord, data, total_results);

                    }).catch(async () => { return message.channel.send('`Time\'s up.`') });

                }).catch(async () => { return message.channel.send('`Time\'s up.`') });

            }).catch(async () => { return message.channel.send('`Time\'s up.`') });

        }).catch(async () => { return message.channel.send('`Time\'s up.`') });
    }
}