var container = document.querySelector(".container");
var item;

// Create 16x16 grid
let createItem = () => {
  for (var i = 0; i < 256; i++) {
    item = document.createElement('div');
    container.appendChild(item);
    item.classList.add('item');
    item.addEventListener("mouseover", changeColor);

    // Add event listener
    // document.querySelector(".item").addEventListener("click", changeColor);
  }
}
createItem();

// Function that changes color of hovered item
function changeColor() {
  // Select clicked Item
  var clickedItem = event.target;
  // Add a new class to the clicked item
  clickedItem.classList.add('hovered');
}
