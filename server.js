const express = require('express');
const fs = require('fs');
const csvParser = require('csv-parser');

const app = express();
const PORT = 3000;

// Path to the CSV file in the data folder
const DATA_FILE_PATH = 'data/all_recipes_dataset.csv';

let recipes = [];

// Load CSV Data on server startup
fs.createReadStream(DATA_FILE_PATH)
    .pipe(csvParser())
    .on('data', (row) => recipes.push(row))
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
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
