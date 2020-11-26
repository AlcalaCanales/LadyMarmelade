class Veggie {
    constructor(game,col,row) {
      this.game=game;
      this.col=col;
      this.row=row;
    }
    draw () {
      const veggieImage = new Image();
      veggieImage.src = 'images/Strawberry.png';
      veggieImage.addEventListener('load', () => {

          this.game.context.drawImage(
            veggieImage,
              (this.col * 50)+5,
              (this.row *50)+5,
              40,
              40);
      });


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