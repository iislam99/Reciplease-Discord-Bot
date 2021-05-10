module.exports = {
    name: 'search',
    description: 'Search for recipes based on specific query',
    async execute(message, args, Discord, client, total_results) {
        const data = await client.commands.get('fetch').fetchSearch(args, total_results);
        client.commands.get('recipes').execute(message, Discord, data, total_results);
    }
}