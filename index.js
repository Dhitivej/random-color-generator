// This variable stores the "Pick a Color" button
const originalButton = document.getElementById("original-button")

// This variable stores the "Mystery Color" button
const mysteryButton = document.getElementById("mystery-button")

// This random number function that will creates color codes for the randomColor variable
function randomNum (num)
{
  return Math.floor(Math.random() * num)
}
// Write your code below
function colorChange(event)
{
  let randomColor = 'rgb(' + randomNum(255) + ',' + randomNum(255) + ',' + randomNum(255) + ')';
  
  event.target.style.backgroundColor = randomColor;
}
originalButton.onclick = colorChange;
mysteryButton.onwheel = colorChange;