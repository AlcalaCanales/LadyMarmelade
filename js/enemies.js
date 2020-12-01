const enemyImage = new Image();
enemyImage.src = 'images/skull_01a.png';

class Enemy {
    constructor(game, col, row) {
      this.game = game
      this.col = col;
      this.row = row;
      this.direction = 'down';
    }

    draw () {
        //const enemyImage = new Image();
        //enemyImage.src = 'images/skull_01a.png';
        //enemyImage.addEventListener('load', () => {
            this.game.context.drawImage(
                enemyImage,
                (this.col * 50)+5,
                (this.row *50)+5,
                40,
                40);
        //});

    }




}

class EnemyHorizontal extends Enemy{
  constructor (game, col, row){
    super(game, col, row);
    this.collisionLeft = false;
    this.collisionRight = false;
    this.direction = "right"
  }

  checkCollision(){
    for (let veggie of this.game.veggies){
      if (this.col - 1 == veggie.col && this.row == veggie.row) {
        this.collisionLeft = true;
        //console.log("collision left")
      }
      if (this.col + 1 == veggie.col && this.row == veggie.row) {
        this.collisionRight = true;
        //console.log("collision right")
      } 
    }
    if ( this.col== 0){
      this.collisionLeft = true;
    }else if (this.col==16){
      this.collisionRight = true;
    }

    if (this.col - 1 == this.game.pot.col && this.row == this.game.pot.row) {
      this.collisionLeft = true;
      //console.log("collision left")
    }
    if (this.col + 1 == this.game.pot.col && this.row == this.game.pot.row) {
      this.collisionRight = true;
      //console.log("collision right")
    } 
  }

  resetCollision() {
    this.collisionLeft = false;
    this.collisionRight = false;
  }

  move(){
    if (this.collisionLeft === false && this.direction=="left") {
      this.moveLeft();
      this.resetCollision()
    }else if (this.collisionLeft === true && this.direction=="left") {
      this.direction="right";
      this.moveRight();
      this.resetCollision()
    }else if (this.collisionRight === false && this.direction=="right") {
      this.moveRight();
      this.resetCollision()
    }else if (this.collisionRight === true && this.direction=="right") {
      this.direction="left";
      this.moveLeft();
      this.resetCollision()
    }
    
  }

  moveRight() {
    if (this.col < 16 && ((this.col+1)%2 ==0 || this.row%2 == 0)) {
      this.col += 1;
    }
  }

  moveLeft() {
    if (this.col > 0 && ((this.col-1)%2 ==0 || this.row%2 == 0)) {
      this.col -= 1;
    }
  }
}


class EnemyVertical extends Enemy{
  constructor (game, col, row){
    super(game, col, row);
    this.collisionUp = false;
    this.collisionDown = false;
    this.direction = "down"
  }

  checkCollision(){
    //console.dir(this.game.veggies)
    
    for (let veggie of this.game.veggies){
      if (this.col == veggie.col && this.row - 1 == veggie.row) {
        this.collisionUp = true;
        //console.log(veggie.col)
      }
      if (this.col == veggie.col && this.row + 1 == veggie.row) {
        this.collisionDown = true;
      }
    }
    if ( this.row== 0){
      this.collisionUp = true;
    }else if (this.row==16){
      this.collisionDown = true;
    }
    if (this.game.pot.active){
      if (this.col == this.game.pot.col && this.row - 1 == this.game.pot.row) {
        this.collisionUp = true;
        //console.log(veggie.col)
      }
      if (this.col == this.game.pot.col && this.row + 1 == this.game.pot.row) {
        this.collisionDown = true;
      }
    }
  }

  resetCollision() {
    this.collisionUp = false;
    this.collisionDown = false;
  }

  move(){
    if (this.collisionUp === false && this.direction=="up") {
      this.moveUp();
      this.resetCollision();
      console.log("moving up")
    }else if (this.collisionUp === true && this.direction=="up") {
      this.direction="down";
      this.moveDown();
      console.log("moving up")
      this.resetCollision()
    }else if (this.collisionDown === false && this.direction=="down") {
      this.moveDown();
      this.resetCollision()
    }else if (this.collisionDown === true && this.direction=="down") {
      this.direction="up";
      this.moveUp();
      this.resetCollision()
    }
    
  }

  moveUp() {
    if (this.row > 0 && ((this.row-1)%2 == 0||this.col%2 == 0)) {
      this.row -= 1;
    }
  }

  moveDown() {
    if (this.row < 12 && ((this.row-+1)%2 == 0||this.col%2 == 0)) {
      this.row += 1;
    }
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