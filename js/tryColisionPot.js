collisionPot() {
    //console.dir(this.veggies)
    for (let veggie of this.veggies) {
      if (
        //UP
        (this.veggie.col == this.pot.col) && (veggie.row < this.pot.row && veggie.row >= this.pot.row - this.pot.potRadius) ||
        //DOWN
        (this.veggie.col == this.pot.col) && (veggie.row > this.pot.row &&veggie.row <= this.pot.row + this.pot.potRadius) ||
        //LEFT
        ((veggie.col < this.pot.col && veggie.col >= this.pot.col - this.pot.potRadius) && (this.pot.row == veggie.row)) ||
        //RIGHT
        ((veggie.col > this.pot.col && veggie.col <= this.pot.col + this.pot.potRadius ) && (this.pot.row == veggie.row))
      ) {
        const indexOfVeggie = this.veggies.indexOf(veggie);
        //console.log(indexOfVeggie);
        //console.dir(this.veggies);
        veggie.active = false;
        //this.veggies.splice(indexOfVeggie, 1);
      }
    }












    for (let enemy of this.enemiesHorizontal) {
      if (
        (this.pot.col == enemy.col && this.pot.row - 1 == enemy.row) ||
        (this.pot.col == enemy.col && this.pot.row + 1 == enemy.row) ||
        (this.pot.col - 1 == enemy.col && this.pot.row == enemy.row) ||
        (this.pot.col + 1 == enemy.col && this.pot.row == enemy.row)
      ) {
        const indexOfEnemy = this.enemiesHorizontal.indexOf(enemy);
        this.enemiesHorizontal.splice(indexOfEnemy, 1);
      }
    }

    for (let enemy of this.enemiesVertical) {
      if (
        (this.pot.col == enemy.col && this.pot.row - 1 == enemy.row) ||
        (this.pot.col == enemy.col && this.pot.row + 1 == enemy.row) ||
        (this.pot.col - 1 == enemy.col && this.pot.row == enemy.row) ||
        (this.pot.col + 1 == enemy.col && this.pot.row == enemy.row)
      ) {
        const indexOfEnemy = this.enemiesVertical.indexOf(enemy);
        this.enemiesVertical.splice(indexOfEnemy, 1);
      }
    }

    //console.dir(this.veggies)
    //this.drawEverything();
    //this.pot.drawPot();
    //console.log('colisionPotFruits');
  }