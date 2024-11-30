const express = require('express');
const fs = require('fs');
const csvParser = require('csv-parser');

const app = express();
const PORT = 3000;

// Path to the CSV file in the data folder
const DATA_FILE_PATH = 'data/all_recipes_dataset.csv';

let recipes = [];

// Load CSV Data with proper parsing
fs.createReadStream(DATA_FILE_PATH)
    .pipe(csvParser({
        mapHeaders: ({ header }) => header.trim(), // Trim extra spaces
        mapValues: ({ value }) => value.trim()    // Trim values
    }))
    .on('data', (row) => {
        // Ensure all expected fields are correctly mapped
        recipes.push({
            name: row.name,
            ingredients: row.ingredients,
            time: row.time,
            budget: row.budget,
            description: row.description,
            link: row.link
        });
    })
    .on('end', () => console.log('Recipes loaded successfully from the CSV file'));

// API to fetch filtered recipes
app.get('/api/recipes', (req, res) => {
    const search = req.query.search?.toLowerCase() || '';
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(search) ||
        recipe.ingredients.toLowerCase().includes(search) ||
        recipe.time.toLowerCase().includes(search) ||
        recipe.budget.toLowerCase().includes(search)
    );
    res.json(filteredRecipes);
});

// Serve static files for the front-end
app.use(express.static('public'));

// Start the server
//app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

// Start the server only if this file is run directly
if (require.main === module) {
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
}

// Export app for testing
module.exports = app;

