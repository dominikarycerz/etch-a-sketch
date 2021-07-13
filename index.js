// Function that creates 16x16 grid

// let createInitialBoard = () => {
//   for (var i = 0; i < 256; i++) {
//     let item = document.createElement('div');
//     document.querySelector('.container').appendChild(item);
//     item.classList.add('item');
//     item.addEventListener('mouseover', changeColor);
//   }
// }
// createInitialBoard();


var container = document.querySelector('.container');
var userInput = 50;


let createInitialBoard = () => {

  let gridSquare = userInput * userInput;
  container.style.gridTemplateColumns = `repeat(${userInput}, 3fr)`;
  container.style.gridTemplateRows = `repeat(${userInput}, 3fr)`;

  for (let i = 1; i <= gridSquare; i++) {
    let item = document.createElement('div');
    container.insertAdjacentElement('afterbegin', item)
    item.classList.add('item');
    item.addEventListener('mouseover', changeColor);
  }
}
createInitialBoard();



// Function that changes color of hovered item by selecting clicked item and adding a new class
function changeColor() {
  let clickedItem = event.target;
  clickedItem.classList.add('hovered');
}


// Function that makes a new grid
document.querySelector('.reset-btn').addEventListener('click', createNewBoard);

function createNewBoard() {
  let allItems = container.querySelectorAll('div');

  allItems.forEach(severalItem =>
    severalItem.classList.remove('hovered')
  );

  userInput = prompt("Enter the number of squares per side for the new grid (max 100).");
  userInput > 100 ? userInput = 100 : i = userInput;

  createInitialBoard(userInput);
}
