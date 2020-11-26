class Veggie {
    constructor(game,col,row) {
      this.game=game;
      this.col=col;
      this.row=row;
    }
    draw () {
      this.game.context.fillStyle = 'coral';
      this.game.context.fillRect(
        this.col*50+5,
        this.row*50+5,
        40, 
        40
      );
    }
}