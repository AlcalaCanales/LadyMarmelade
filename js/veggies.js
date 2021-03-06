const veggieImage = new Image();
veggieImage.src = 'images/Strawberry.png';

class Veggie {
  constructor(game, col, row) {
    this.game = game;
    this.col = col;
    this.row = row;
    this.active = true;
  }
  draw() {
    //const veggieImage = new Image();
    //veggieImage.src = 'images/Strawberry.png';
    //veggieImage.addEventListener('load', () => {
    if (this.active == true) {
      this.game.context.drawImage(
        veggieImage,
        this.col * this.game.tile + this.game.tile / 10,
        this.row * this.game.tile + this.game.tile / 10,
        (this.game.tile / 10) * 8,
        (this.game.tile / 10) * 8
      );
    }
    //});

    /*
      this.game.context.fillStyle = 'coral';
      this.game.context.fillRect(
        this.col*50+5,
        this.row*50+5,
        40, 
        40
      );*/
  }
}
