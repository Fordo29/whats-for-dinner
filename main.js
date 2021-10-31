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
// Query selectors
var sideRadioButton = document.getElementById("side");
var mainRadioButton = document.getElementById("main");
var dessertRadioButton = document.getElementById("dessert");
var mealRadioButton = document.getElementById("meal");
var letsCookButton = document.querySelector(".lets-cook");
var clearButton = document.querySelector(".clear-button");

//views
var cookpotView = document.querySelector(".cookpot");
var recipeView = document.querySelector(".showFood");
var singleFoodView = document.querySelector(".show-single-food");

//event listeners
letsCookButton.addEventListener("click", displayFood);
clearButton.addEventListener("click", showCookPot);

// Functions
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showRandomizeFood() {
  if (sideRadioButton.checked){
    return sides[getRandomIndex(sides)];
  } else if (mainRadioButton.checked) {
    return mains[getRandomIndex(mains)];
  } else if (dessertRadioButton.checked) {
    return desserts[getRandomIndex(desserts)];
  } else if (mealRadioButton.checked) {
    return `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert`
  }
}

function showFoodView() {
  hide(cookpotView);
  show(recipeView);
  show(singleFoodView);
  show(clearButton);
}

function showCookPot() {
  show(cookpotView);
  hide(recipeView);
  hide(singleFoodView);
  hide(clearButton);
}


function displayFood() {
  if (!showRandomizeFood()) {
    showCookPot();
  } else {
    singleFoodView.innerText = `${showRandomizeFood()}!`;
    showFoodView();
  }
}
