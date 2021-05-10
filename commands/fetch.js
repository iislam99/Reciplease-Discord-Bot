const fetch = require("node-fetch");
const app_id = "";
const app_key = "";

module.exports = {
    name: 'fetch',
    description: 'Different methods for fetching data.',
    
    // Fetch data based on questionnaire
    async fetchData(questionAnswers, total_results) {        
        // Diet type
        var diet = "";
        if (questionAnswers[0] === "Keto") {
            diet = "keto-friendly";
        } else if (questionAnswers[0] === "Pescatarian") {
            diet = "pescatarian";
        } else if (questionAnswers[0] === "Vegetarian") {
            diet = "vegetarian";
        } else if (questionAnswers[0] === "Vegan") {
            diet = "vegan";
        }

        // Time
        var time = "";
        if (questionAnswers[1] === "Less than 1 hour") {
            time = "60";
        } else if (questionAnswers[1] === "More than 2 hours") {
            time = "120%2B";
        } else if (questionAnswers[1] === "More than 5 hours") {
            time = "300%2B";
        } else if (questionAnswers[1] === "More than 24 hours") {
            time = "1440%2B";
        } 

        // Cuisine
        var cuisine = questionAnswers[2];

        // Type of meal
        var meal = questionAnswers[3];

        // Generate URL
        var url = "";
        if (diet != "") {
            url = `https://api.edamam.com/search?q=${cuisine}&app_id=${app_id}&app_key=${app_key}&Health=${diet}&time=${time}&cuisineType=${cuisine}&mealType=${meal}&to=${total_results}`;
        } else {
            url = `https://api.edamam.com/search?q=${cuisine}&app_id=${app_id}&app_key=${app_key}&time=${time}&cuisineType=${cuisine}&mealType=${meal}&to=${total_results}`;
        }
        
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                return data;
        });
    },
    
    // Fetch data based on search query
    async fetchSearch(args, total_results) {
        let query = '';
        for (i = 0; i < args.length; i++) {
            query += args[i] + '%20';
        }

        let url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&to=${total_results}`;
        
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                return data;
        });
    },
    
    // Test fetching without going through questionnaire
    // async testFetch(message, Discord, client, total_results) {
    //     const questionAnswers = ['None', 'Less than 1 hour', 'American', 'Snack'];
    //     const data = await client.commands.get('fetch').fetchData(questionAnswers, total_results);
    //     client.commands.get('recipes').execute(message, Discord, data, total_results);
    // }
}
