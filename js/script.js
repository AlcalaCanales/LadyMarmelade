const canvasElement = document.querySelector('canvas');

const game = new Game(canvasElement);


//different screens
const screenStart = document.getElementById('start');
const screenGameOver = document.getElementById('game-over');
const screenPlay = document.getElementById('play');
const screenWin = document.getElementById('win');


//
const playButton = document.getElementById('play-button');
const playAgainButton = document.getElementById('play-again-button');
const playAgainWinButton = document.getElementById('play-again-win-button');



playButton.addEventListener('click', () => {
  screenStart.style.display = 'none';
  screenPlay.style.display = 'initial';
  game.reset()
  game.loop();

});

playAgainButton.addEventListener('click', () => {
  screenGameOver.style.display = 'none';
  screenPlay.style.display = 'initial';
  //const game = new Game(canvasElement);
  game.reset();
  game.loop();
});

playAgainWinButton.addEventListener('click', () => {
  screenWin.style.display = 'none';
  screenPlay.style.display = 'initial';
  //const game = new Game(canvasElement);
  game.reset();
  game.loop();
});








/*const canvasElement = document.querySelector('canvas');



const game = new Game(canvasElement);

/*

const triggerPlayElement = document.getElementById('trigger-play');
const triggerPlayAgainElement = document.getElementById('trigger-play-again');

const screenStartElement = document.getElementById('screen-start');
const screenGameOverElement = document.getElementById('screen-game-over');
const screenPlayElement = document.getElementById('screen-play');

triggerPlayElement.addEventListener('click', () => {
  screenStartElement.style.display = 'none';
  screenPlayElement.style.display = 'initial';

  game.loop();
});

triggerPlayAgainElement.addEventListener('click', () => {
  screenGameOverElement.style.display = 'none';
  screenPlayElement.style.display = 'initial';

  game.reset();
  game.loop();
});


game.loop();

//drawGrid()
//let playerOne = new Character(0, 0);
//let pot = new Pot(playerOne);
//let coor = undefined
//let veggies = 
//drawPlayer();
//drawObstacles()


/*
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
*/