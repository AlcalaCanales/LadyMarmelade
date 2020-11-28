class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.reset();
        this.setKeyBindings();
        this.createVeggies();

;
        this.context.translate(50, 50); 
    }

    reset() {
        this.player = new Character(this, 0, 0);
        this.enemies = [];
        this.veggies = [];
        this.score = 0;
        this.pot = new Pot(this, this.player)
    }

    drawGrid() {
        this.context.save();
        this.context.lineWidth = 1;
        this.context.fillStyle = 'green';
        this.context.fillRect(0, 0, 850, 650);
        for (let column = 0; column <= 17; column++) {
            this.context.beginPath();
            this.context.moveTo(column * 50, 0);
            this.context.lineTo(column * 50, 650);
            this.context.stroke();
            this.context.closePath();
        }
    
        for (let row = 0; row <= 13; row++) {
            this.context.beginPath();
            this.context.moveTo(0, row * 50);
            this.context.lineTo(850, row * 50);
            this.context.stroke();
            this.context.closePath();
        }
        this.context.restore();
    }

    drawObstacles(){
        this.context.save();
        this.context.fillStyle = 'grey';
        const obstacleImage = new Image();
        obstacleImage.src = 'images/obstacles.png';
        for (let i=0; i<16; i++){
            for (let j=0; j<12; j++){
                if (i%2 !=0 && j%2 != 0){
                    this.context.fillRect(
                        (i * 50)+5, 
                        (j * 50)+5,
                        40,
                        40,
                    )
                }
            }
        }
    }

    createVeggies(){
        for (let i=0; i<17; i++){
            for (let j=0; j<13; j++){
                if (i%2 ==0 || j%2 ==0){
                    if ((i==0 && j==0) || (i==1 && j==0) || (i==0 && j==1)){
                        console.log("nothing happens")
                    }else {
                        let veggie = new Veggie(this,i, j);
                        this.veggies.push(veggie)
                    }
                }
            }
        }
        console.dir(this.veggies)
    }
    
    runLogic() {
        //console.log("x" + this.player.col + "y" + this.player.row)
        this.drawGrid();
        this.drawObstacles();
        this.player.drawPlayer();
        for (let veggie of this.veggies) {
            veggie.draw()
        }
        //console.log("logic runs")
        this.resetCollision
        this.collisionPlayerFruits();
        this.collisionPotFruits();
    }

    collisionPlayerFruits(){
        for (let veggie of this.veggies) {
            if (this.player.col== veggie.col && this.player.row-1==veggie.row){
                this.player.collisionUp=true
            }
            if (this.player.col== veggie.col && this.player.row+1==veggie.row){
                this.player.collisionDown=true
            }
            if (this.player.col-1== veggie.col && this.player.row==veggie.row){
                this.player.collisionLeft=true
            }
            if (this.player.col+1== veggie.col && this.player.row==veggie.row){
                this.player.collisionRight=true
            }
        }
        /*
        console.log("colision left is" + this.player.collisionLeft)
        console.log("colision rigth is" + this.player.collisionRight)
        console.log("colision down is" + this.player.collisionDown)
        console.log("colision up is" + this.player.collisionUp)*/
    }

    collisionPotFruits(){
        for (let veggie of this.veggies) {
            if (
                this.pot.col== veggie.col && this.pot.row-1==veggie.row || 
                this.pot.col== veggie.col && this.pot.row+1==veggie.row  || 
                this.pot.col-1== veggie.col && this.pot.row==veggie.row || 
                this.pot.col+1== veggie.col && this.pot.row==veggie.row){
                const indexOfVeggie = this.veggies.indexOf(veggie);
                this.veggies.splice(indexOfVeggie, 1);
            }
        }
    }

    resetCollision(){
        this.player.collisionUp = false
        this.player.collisionDown = false
        this.player.collisionLeft = false
        this.player.collisionRight = false
    }

    setKeyBindings() {
        window.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case 37:
                    if (this.player.collisionLeft == false){
                        this.player.moveLeft();
                        this.player.collisionLeft == false
                        break;
                    }else{
                        console.log("Cannot move")
                    }
                case 38:
                    if (this.player.collisionUp == false){
                        this.player.moveUp();
                        this.player.collisionUp == false
                        break;
                    }else{
                        console.log("Cannot move")
                    }
                case 39:
                    console.log("RIGHT!!")
                    if (this.player.collisionRight == false){
                        this.player.moveRight();
                        break;
                    }else{
                        console.log("Cannot move")
                    }
                case 40:
                    if (this.player.collisionDown == false){
                        this.player.moveDown();
                        break;
                    }else{
                        console.log("Cannot move")
                    }
            }

            this.runLogic()
            this.pot.drawPot();
            this.resetCollision();
        
        });        
        
        window.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case 32:
                this.pot.getPotCoord();
                break;
            }
            this.runLogic()
            this.pot.drawPot();
        });
    }


}

/*
function drawGrid() {
    // TODO: write the code of the function
    context.save();
    context.lineWidth = 1;
    context.fillStyle = 'green';
    context.fillRect(0, 0, 850, 650);
    for (let column = 0; column <= 17; column++) {
    context.beginPath();
    context.moveTo(column * 50, 0);
    context.lineTo(column * 50, 650);
    context.stroke();
    context.closePath();
    }

    for (let row = 0; row <= 13; row++) {
    context.beginPath();
    context.moveTo(0, row * 50);
    context.lineTo(850, row * 50);
    context.stroke();
    context.closePath();
    }
    context.restore();
}
*/
