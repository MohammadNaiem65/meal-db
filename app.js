let favorite = [];

const loadMeals = (name) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((res) => res.json())
    .then((data) => console.log(data.meals));
};

const displayMeals = btn =>{
};

const switchPage = (btn) => {
    if(btn.name === 'search'){
        window.location = "search.html";
    } else{
        window.location = "index.html";
    }
}