module.exports = {
    name: 'recipes',
    description: 'Lists recipes based on user answers.',
    async execute(message, Discord, data, total_results) {
        if (data.hits.length === 0) return message.channel.send('`No recipes found.`');
        
        let pages = [];
        let page_index = 1;
        let page_count = 0;
       
        // Calculating total number of pages based on number of search results obtained and number of results allowed
        if (data.count > total_results) {
            page_count = total_results / 10;
        } else {
            total_results = data.count;
            if (total_results % 10 === 0) {
                page_count = total_results / 10;
            } else {
                page_count = Math.ceil(total_results / 10);
            }
        }

        // Creating pages
        for (i = 0; i < page_count; i++) {
            pages.push(new Discord.MessageEmbed());
            pages[i].setTitle('Recipes');
            pages[i].setDescription('Navigation through these recipes will be disabled after 5 minutes.')
            pages[i].setColor('GREEN');
            pages[i].setFooter(`Page ${i + 1} of ${page_count}`);
            for (j = 0; j < 10; j++) {
                // If all values for last page have been added, break
                if (i + 1 === page_count && j === total_results % 10 && total_results % 10 != 0) break;
                pages[i].addField(`${data.hits[10*i + j].recipe.label}`, `[Click here](${data.hits[10*i + j].recipe.url})`);
            }
        }    

        // Handling reactions to navigate pages
        const recipeListMessage = await message.channel.send(pages[0]);
        recipeListMessage.react('⏪');
        recipeListMessage.react('⏩');
        
        const isBackwards = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
        const isForwards = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

        const backwards = recipeListMessage.createReactionCollector(isBackwards, { time: 300000, dispose: true });
        const forwards = recipeListMessage.createReactionCollector(isForwards, { time: 300000, dispose: true });

        backwards.on("collect", (reaction) => {
            if (page_index === 1) {
                page_index = pages.length;
            } else {
                page_index--;
            }
            recipeListMessage.edit(pages[page_index - 1]);
        });
        backwards.on("remove", (reaction) => {
            if (page_index === 1) {
                page_index = pages.length;
            } else {
                page_index--;
            }
            recipeListMessage.edit(pages[page_index - 1]);
        });

        forwards.on("collect", (reaction) => {
            if (page_index === pages.length) {
                page_index = 1;
            } else {
                page_index++;
            }
            recipeListMessage.edit(pages[page_index - 1]);
        });
        forwards.on("remove", (reaction) => {
            if (page_index === pages.length) {
                page_index = 1;
            } else {
                page_index++;
            }
            recipeListMessage.edit(pages[page_index - 1]);
        });
    }
}