export class Field {

    constructor(snake) {
        this.snake = snake;
    }

    makeApple(fieldX, fieldY) {
        var x = Math.round(Math.random() * (fieldX - 1));
        var y = Math.round(Math.random() * (fieldY - 1));
        var apple = document.getElementById(x + ',' + y);
        if (apple.className == 'cell') {
            apple.className = "cell apple";
        }
        else {
            this.makeApple(fieldX, fieldY);
        }
        return apple;
    }

    drawGameField(fieldX, fieldY) {
        for (var x = 0; x < fieldX; x++) {
            var block_field = document.getElementById('block_field');
            var coordinateX = document.createElement('div');
            block_field.appendChild(coordinateX);
            coordinateX.className = 'field';
            for (var y = 0; y < fieldY; y++) {
                var coordinateY = document.createElement('div');
                coordinateX.appendChild(coordinateY);
                coordinateY.className = 'cell';
                coordinateY.id = x + ',' + y;
            }
        }
        this.snake.initialisation();
        this.makeApple(fieldX, fieldY);
    }
}