class Enemy {
    constructor(game, col, row) {
      this.game = game
      this.col = col;
      this.row = row;
      this.direction = 'down';
    }

    draw () {
        const enemyImage = new Image();
        enemyImage.src = 'images/skull_01a.png';
        enemyImage.addEventListener('load', () => {
            this.game.context.drawImage(
                enemyImage,
                (this.col * 50)+5,
                (this.row *50)+5,
                40,
                40);
        });

    }
}

/*
class EnemyHorizontal {
    constructor(game, col, row) {
      this.game = game
      this.col = col;
      this.row = row;
      this.direction = 'right';
      this.collisionUp = false
      this.collisionDown = false
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

}*/