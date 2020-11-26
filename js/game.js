

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.reset();
        this.setKeyBindings();
        this.context.translate(50, 50); 
    }

    reset() {
        this.player = new Character(this, 0, 0);
        this.enemies = [];
        this.vegetables = [];
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
    

    runLogic() {
        this.drawGrid();
        this.drawObstacles();
        this.player.drawPlayer();

    }

    setKeyBindings() {
        window.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
            case 37:
                this.player.moveLeft();
                break;
            case 38:
                this.player.moveUp();
                break;
            case 39:
                this.player.moveRight();
                break;
            case 40:
                this.player.moveDown();
                break;
            }
            this.drawGrid();
            this.drawObstacles();
            this.player.drawPlayer();
            this.pot.drawPot();
        
        });        
        
        window.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case 32:
                this.pot.getPotCoord();
                break;
            }
            this.drawGrid();
            this.drawObstacles();
            this.player.drawPlayer();
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
