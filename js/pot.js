const potImage = new Image();
potImage.src = 'images/Marmalade.png';
const flameUpImage = new Image();
flameUpImage.src = 'images/flameTop.png';
const flameDownImage = new Image();
flameDownImage.src = 'images/flameDown.png';
const flameRightImage = new Image();
flameRightImage.src = 'images/flameRight.png';
const flameLeftImage = new Image();
flameLeftImage.src = 'images/flameLeft.png';

class Pot {
  constructor(game, player) {
    this.game = game;
    this.player = player;
    this.col = undefined;
    this.row = undefined;
    this.active = false;
    this.flamesActive = false;
    this.potRadius = 1;
  }

  createPot() {
    this.col = this.player.col;
    this.row = this.player.row;
    this.active = true;
    setTimeout(() => {
      this.flamesActive = true;
    }, 1200);

    setTimeout(() => {
      this.active = false;
      this.flamesActive = false;
      this.game.collisionPot();
    }, 1500);
  }

  draw() {
    if (this.col != undefined || this.row != undefined) {
      //const potImage = new Image();
      //potImage.src = 'images/Marmalade.png';
      //potImage.addEventListener('load', () => {
      this.game.context.drawImage(
        potImage,
        this.col * 50 + 5,
        this.row * 50 + 5,
        40,
        40
      );
      //});

    }
  }

  drawFlames() {
    const index = [-1, 0, 1];
    this.game.context.save();
    this.game.context.fillStyle = 'coral';
    for (let col of index) {
      for (let row of index) {
        if (col == -1 && row == 0 && this.col-this.potRadius >= 0) {
          console.log(col);
          console.log(row);
          //this.game.context.fillRect(
          this.game.context.drawImage(
            flameLeftImage,
            (this.col - this.potRadius) * 50,
            (this.row + 0) * 50,
            50,
            50
          );
        } else if (col == 1 && row == 0 && this.col+this.potRadius <= 16) {
          console.log(col);
          console.log(row);
          //this.game.context.fillRect(
          this.game.context.drawImage(
            flameRightImage,
            (this.col + this.potRadius) * 50,
            (this.row + 0) * 50,
            50,
            50
          );
        } else if (col == 0 && row == -1 && this.row-this.potRadius >= 0) {
          console.log(col);
          console.log(row);
          //this.game.context.fillRect(
          this.game.context.drawImage(
            flameUpImage,
            (this.col + 0) * 50,
            (this.row -this.potRadius) * 50,
            50,
            50
          );
        } else if (col == 0 && row == 1 && this.row+this.potRadius <= 12) {
          console.log(this.col);
          console.log(this.row);
          //this.game.context.fillRect(
          this.game.context.drawImage(
            flameDownImage,
            (this.col + 0) * 50,
            (this.row + this.potRadius) * 50,
            50,
            50
          );
        }
      }
    }

    this.game.context.restore();
  }
}

/*
function getPotCoord(player){
    this.coor = [player.col, player.row]
    return coor
}

function drawPot(coor){
    if (coor != undefined){
        //context.save();
        //context.fillStyle = 'coral';
        //game.context.fillRect(
            //(coor[0] * 50)+5, 
            //(coor[1] *50)+5,
            //40,
            //40,
        //)
        const potImage = new Image();
        potImage.src = 'images/Marmalade.png';
        potImage.addEventListener('load', () => {
            drawGrid();
            drawObstacles();
            drawPlayer();
            context.drawImage(
                potImage,
                (coor[0] * 50)+5,
                (coor[1] *50)+5,
                40,
                40);
        });
    }else {
        console.log('Pot not drawn')
    }

}

*/
