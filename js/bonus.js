const bonusImage = new Image();
bonusImage.src = 'images/Gold_21_blau.png';
class Bonus {
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
        bonusImage,
        this.col * this.game.tile + 16,
        this.row * this.game.tile + 16,
        24,
        24
      );
    }
  }

  collisionBonus() {
    for (let bonus of this.game.boni) {
      if (
        this.player.col == bonus.col &&
        this.player.row == bonus.row &&
        bonus.active == true
      ) {
        const indexOfBonus = this.game.boni.indexOf(bonus);

        this.pot.potRadius += 1;
        //console.log('Bonus' + this.pot.potRadius);
        bonus.active = false;
        //this.veggies.splice(indexOfVeggie, 1);
      }
    }
  }
}
