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
