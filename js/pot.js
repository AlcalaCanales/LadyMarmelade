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
    if (this.active == false){
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
  }

  draw() {
    if (this.col != undefined || this.row != undefined) {
      //const potImage = new Image();
      //potImage.src = 'images/Marmalade.png';
      //potImage.addEventListener('load', () => {
      this.game.context.drawImage(
        potImage,
        (this.col * this.game.tile)+(this.game.tile/10),
        (this.row *this.game.tile)+(this.game.tile/10),
        ((this.game.tile/10)*8),
        ((this.game.tile/10)*8),
      );
      //});
    }
  }

  drawFlames() {
    //const index = [-1, 0, 1];
    this.game.context.save();
    this.game.context.fillStyle = 'coral';
    for (let col = this.potRadius * -1; col <= this.potRadius; col++) {
      for (let row = this.potRadius * -1; row <= this.potRadius; row++) {
        if (
          col != 0 &&
          this.col + col < this.col &&
          row == 0 &&
          this.col + col >= 0
        ) {
          console.log(col);
          console.log(row);
          //this.game.context.fillRect(
          this.game.context.drawImage(
            flameLeftImage,
            (this.col + col) * this.game.tile,
            (this.row + 0) * this.game.tile,
            this.game.tile,
            this.game.tile
          );
        } else if (
          col != 0 &&
          this.col + col > this.col &&
          row == 0 &&
          this.col + col <= 16
        ) {
          console.log(col);
          console.log(row);
          //this.game.context.fillRect(
          this.game.context.drawImage(
            flameRightImage,
            (this.col + col) * this.game.tile,
            (this.row + 0) * this.game.tile,
            this.game.tile,
            this.game.tile
          );
        } else if (
          col == 0 &&
          this.row + row < this.row &&
          row != 0 &&
          this.row + row >= 0
        ) {
          console.log(col);
          console.log(row);
          //this.game.context.fillRect(
          this.game.context.drawImage(
            flameUpImage,
            (this.col + 0) * this.game.tile,
            (this.row + row) * this.game.tile,
            this.game.tile,
            this.game.tile
          );
        } else if (
          col == 0 &&
          this.row + row > this.row &&
          row != 0 &&
          this.row + row <= 12
          ) {
          console.log(this.col);
          console.log(this.row);
          //this.game.context.fillRect(
          this.game.context.drawImage(
            flameDownImage,
            (this.col + 0) * this.game.tile,
            (this.row + row) * this.game.tile,
            this.game.tile,
            this.game.tile
          );
        }
      }
    }

    this.game.context.restore();
  }
}


