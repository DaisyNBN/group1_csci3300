async function fetchRecipes() {
    const query = document.getElementById("recipe-search").value.toLowerCase();
    const response = await fetch(`/api/recipes?search=${encodeURIComponent(query)}`);
    const recipes = await response.json();

    const recipesList = document.getElementById("recipes-list");
    recipesList.innerHTML = '';

    recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");

        card.innerHTML = `
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <p><strong>Time:</strong> ${recipe.time}</p>
            <p><strong>Budget:</strong> ${recipe.budget}</p>
            <a href="${recipe.link}" target="_blank">View Recipe</a>
        `;

        recipesList.appendChild(card);
    });
}
