
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

