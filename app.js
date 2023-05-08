let favorite = [];
let errMsg;
let mealsContainer = document.getElementById("meals");
const errorContainer = document.getElementById("error-message");

// Loading meals from API
const loadMeals = () => {
  errorContainer.classList.add("hidden");
  let keyword = document.getElementById("searched-meal").value;
  if (keyword == "" || keyword == " " || keyword == "  " || keyword == "   ") {
    mealsContainer.innerHTML = "";
    errMsg = "Please search something!";
    showError();
    return;
  }
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

// Displaying meals in the UI
const displayMeals = (meals) => {
  mealsContainer.innerHTML = "";
  meals.map((meal) => {
    let {
      strMeal: mealName,
      idMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
    } = meal;
    // Shorting String
    if (mealName.length >= 25) {
      mealName = mealName.slice(0, 25) + "...";
    }
    if (strInstructions.length >= 76) {
      strInstructions = strInstructions.slice(0, 76) + "...";
    }
    // Setting up HTML
    const mealContainer = document.createElement("div");
    mealContainer.classList = "h-[25rem] bg-base-100 shadow-xl rounded-lg";
    mealContainer.innerHTML = `
                <img src="${strMealThumb}" alt="Shoes" class="h-1/2 w-full rounded-t-lg object-cover" />
                <div class="px-5 pt-2">
                    <div class="flex justify-end">
                        <div class="badge badge-warning badge-outline">${strCategory}</div>
                        <div class="badge badge-warning badge-outline ml-3">${strArea}</div>
                    </div>
                    <h2 class="font-bold text-2xl">${mealName}</h2>
                    <p class="font-semibold underline text-orange-300">Instructions:</p>
                    <p>${strInstructions}</p>
                    <div class="card-actions justify-between items-center mt-2">
                        <p>Id: ${idMeal}</p>
                        <button class="btn btn-warning text-white">Buy Now</button>
                    </div>
                </div>
    `;
    mealsContainer.appendChild(mealContainer);
  });
};

// Show errors
const showError = () => {
  errorContainer.innerText = errMsg;
  errorContainer.classList.remove("hidden");
};

// Function to Switch page
const switchPage = (btn) => {
  if (btn.name === "search") {
    window.location = "search.html";
  } else {
    window.location = "index.html";
  }
};
