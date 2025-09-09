const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(json => displayCategory(json.plants));
}

const displayCategory = (plants) => {
    const categoryContainer = document.getElementById("categories");
    categoryContainer.innerHTML = '';

    // Get unique categories
    const uniqueCategories = [...new Set(plants.map(plant => plant.category))];

    for (let category of uniqueCategories) {
        const btnCata = document.createElement("div");
        btnCata.innerHTML = `<button class="w-56 rounded-sm hover:bg-[#15803D] hover:text-white ">${category}</button>`;
        categoryContainer.append(btnCata);
    }
}

loadCategory();
