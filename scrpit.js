let number;
const numberGuess = document.querySelector("input");

function getRandomInt(max) {
  number = Math.floor(Math.random() * max);
  console.log(number); 
}

document.addEventListener("DOMContentLoaded", function() {
  getRandomInt(11);  

  document.querySelector("button").addEventListener("click", comp);
});

function comp() {
  const guess = parseInt(numberGuess.value, 10);
  if (guess === number) {
    alert("true");
  } else {
    alert("false");
  }
}
