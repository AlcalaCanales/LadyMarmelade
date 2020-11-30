this.playerImage = new Image();
this.playerImage.src = 'images/spritesheet-2.png';

class Character {
    constructor(game, col, row) {
      this.game = game
      this.col = col;
      this.row = row;
      this.direction = 'down';
      this.score = 0;
      this.collisionUp = false
      this.collisionDown = false
      this.collisionLeft = false
      this.collisionRight = false
    }
    moveUp() {
      this.direction = 'up';
      if (this.row > 0 && ((this.row-1)%2 == 0||this.col%2 == 0)) {
        this.row -= 1;
      }
    }
    moveRight() {
      this.direction = 'right';
      if (this.col < 16 && ((this.col+1)%2 ==0 || this.row%2 == 0)) {
        this.col += 1;
      }
    }
    moveDown() {
      this.direction = 'down';
      if (this.row < 12 && ((this.row-+1)%2 == 0||this.col%2 == 0)) {
        this.row += 1;
      }
    }
    moveLeft() {
      this.direction = 'left';
      if (this.col > 0 && ((this.col-1)%2 ==0 || this.row%2 == 0)) {
        this.col -= 1;
      }
    }

    drawPlayer() {
      //this.playerImage = new Image();
      //this.playerImage.src = 'images/spritesheet-2.png';
      switch (this.direction) {
          case 'up':
              //this.playerImage.addEventListener('load', () => {
                  this.game.context.drawImage(
                      playerImage,
                      4*36,
                      4*36,
                      50,
                      50,
                      this.col * 50, 
                      this.row * 50,
                      50,
                      50);
                  //console.log(playerOne.col, playerOne.row);
              //});
              break;
          case 'down':
              //this.playerImage.addEventListener('load', () => {
                  this.game.context.drawImage(
                      playerImage,
                      4*36,
                      0,
                      50,
                      50,
                      this.col * 50, 
                      this.row * 50,
                      50,
                      50);
                  //console.log(playerOne.col, playerOne.row);
              //});
              break;
          case 'left':
              //this.playerImage.addEventListener('load', () => {
                  this.game.context.drawImage(
                      playerImage,
                      4*36,
                      48,
                      50,
                      50,
                      this.col * 50, 
                      this.row * 50,
                      50,
                      50);
                  //console.log(playerOne.col, playerOne.row);
              //});
              break;
          case 'right':
              //this.playerImage.addEventListener('load', () => {
                  this.game.context.drawImage(
                      playerImage,
                       4*36,
                      96
                      ,
                      50,
                      50,
                      this.col * 50, 
                      this.row * 50,
                      50,
                      50);
                  //console.log(playerOne.col, playerOne.row);
              //});
              break;
      }
      //playerImage.src = 'images/character-down.png';
      //const ratio = playerImage.width / playerImage.height;
  
  }
}

/*
function drawPlayer() {
    const playerOneImage = new Image();
    playerOneImage.src = 'images/spritesheet-2.png';
    switch (playerOne.direction) {
        case 'up':
            playerOneImage.addEventListener('load', () => {
                context.drawImage(
                    playerOneImage,
                    4*36,
                    4*36,
                    50,
                    50,
                    playerOne.col * 50, 
                    playerOne.row * 50,
                    50,
                    50);
                //console.log(playerOne.col, playerOne.row);
            });
            break;
        case 'down':
            playerOneImage.addEventListener('load', () => {
                context.drawImage(
                    playerOneImage,
                    4*36,
                    0,
                    50,
                    50,
                    playerOne.col * 50, 
                    playerOne.row * 50,
                    50,
                    50);
                //console.log(playerOne.col, playerOne.row);
            });
            break;
        case 'left':
            playerOneImage.addEventListener('load', () => {
                context.drawImage(
                    playerOneImage,
                    4*36,
                    48,
                    50,
                    50,
                    playerOne.col * 50, 
                    playerOne.row * 50,
                    50,
                    50);
                //console.log(playerOne.col, playerOne.row);
            });
            break;
        case 'right':
            playerOneImage.addEventListener('load', () => {
                context.drawImage(
                    playerOneImage,
                    4*36,
                    96
                    ,
                    50,
                    50,
                    playerOne.col * 50, 
                    playerOne.row * 50,
                    50,
                    50);
                //console.log(playerOne.col, playerOne.row);
            });
            break;
    }
    //playerImage.src = 'images/character-down.png';
    //const ratio = playerImage.width / playerImage.height;

}


  
*/