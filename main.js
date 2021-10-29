// Query selectors
var sideRadioButton = document.querySelector("#side");
var mainRadioButton = document.querySelector("#main");
var dessertRadioButton = document.querySelector("#dessert");
var mealRadioButton = document.querySelector("#meal");
var letsCookButton = document.querySelector(".lets-cook");

//views
var cookpotView = document.querySelector(".cookpot");
var recipeView = document.querySelector(".showFood");


//event listeners
letsCookButton.addEventListener("click", displayFood);


// Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
    }

function displayFood() {
  showFood.innerHTML = ``;
  if (sideRadioButton.checked){
    sides[getRandomIndex(sides)]`
    }

  }

console.log(recipeView.style);
//   if(sideRadioButton === true) {
//     for(var i = 0; i < sides.length; i++) {
//
//     }
//   }
//   showFoodView();
// }


// function showFoodView() {
//   cookpotView.classList.add('hidden');
//   recipeView.classList.remove('hidden');
// }
//
// function showCookPot() {
//   cookpotView.classList.remove('hidden');
//   recipeView.classList.add('hidden');
}
var sides = [
'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies'
]

var mains = [
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza'
]

var desserts = [
'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs',
]
