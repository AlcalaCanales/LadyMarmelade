const canvasElement = document.querySelector('canvas');

const context = canvasElement.getContext('2d');

context.translate(50, 50)

drawGrid()
let playerOne = new Character(0, 0);
let pot = new Pot(playerOne);
let coor = undefined
let veggies = 
drawPlayer();
drawObstacles()



window.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
      case 37:
        playerOne.moveLeft();
        break;
      case 38:
        playerOne.moveUp();
        break;
      case 39:
        playerOne.moveRight();
        break;
      case 40:
        playerOne.moveDown();
        break;
    }
    drawGrid();
    drawObstacles();
    drawPlayer();
    drawPot(coor);

});


window.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 32:
      coor = getPotCoord(playerOne);
      break;
  }
  drawPot(coor);
});