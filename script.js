
function scrollToNextSection() {
    document.getElementById("next-section").scrollIntoView({ behavior: "smooth" });
}
       
function fillSearch(ingredient) {
    const searchBar = document.getElementById("next-section-search");

    if (!searchBar.value.includes(ingredient)) {
        if (searchBar.value) {
            searchBar.value += `, ${ingredient}`;
        } else {
            searchBar.value = ingredient; 
        }
    }
    
}

function loadIngredients() {
    const ingredients = ["Eggs", "Tomato", "Ramen", "Chicken", "Garlic", "Onion", "Cheese", "Carrot", "Pasta", "Bread", "Butter", "Milk", "Salt", "Sugar", "Pepper", "Olive Oil", "Spinach", "Bacon", "Sausage", "Tofu"];
    const optionsContainer = document.getElementById("options-container");

    const maxOptionsPerRow = 7; 

    for (let i = 0; i < ingredients.length; i += maxOptionsPerRow) {
        const row = document.createElement("div");
        row.classList.add("options-row");
        optionsContainer.appendChild(row);

        for (let j = i; j < i + maxOptionsPerRow && j < ingredients.length; j++) {
            const optionBox = document.createElement("div");
            optionBox.classList.add("option-box");
            optionBox.textContent = ingredients[j].trim();
            optionBox.onclick = () => fillSearch(ingredients[j].trim());
            row.appendChild(optionBox); 
        }
    }

}



window.onload = loadIngredients;

