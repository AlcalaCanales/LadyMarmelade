const bonusImage = new Image();
bonusImage.src = 'images/Gold_21.png';
class Bonus {
    constructor(game,col,row) {
      this.game=game;
      this.col=col;
      this.row=row;
      this.active=true
    }

    draw () {
        //const veggieImage = new Image();
        //veggieImage.src = 'images/Strawberry.png';
        //veggieImage.addEventListener('load', () => {
        if(this.active==true){
            this.game.context.drawImage(
                bonusImage,
                (this.col * 50)+5,
                (this.row *50)+5,
                40,
                40);
            }
        }

}