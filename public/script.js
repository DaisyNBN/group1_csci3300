async function fetchRecipes() {
    const query = document.getElementById("recipe-search").value.toLowerCase();
    const response = await fetch(`/api/recipes?search=${encodeURIComponent(query)}`);
    const recipes = await response.json();

    const recipesList = document.getElementById("recipes-list");
    recipesList.innerHTML = '';

    recipes.forEach(recipe => {
        console.log(recipe);
        
        const card = document.createElement("div");
        card.classList.add("recipe-card");

        card.innerHTML = `
            <a href="${recipe.link}" target="_blank" class="card-link" }>
                    <h3 class="card-title">${recipe.name}</h3>
                    <p>${recipe.description}</p>
                    <p><strong class='card-subtitle'>Time:</strong> ${recipe.time}</p>
                    <p><strong class='card-subtitle'>Budget:</strong> ${recipe.budget}</p>
            <a/>
        `;

        recipesList.appendChild(card);
    });
}
