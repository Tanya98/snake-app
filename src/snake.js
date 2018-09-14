import { SnakeModel, SnakeModal } from './modal';

export class Snake {
    constructor() {
        this.length = 3;
        this.body = [[1, 1], [1, 2], [1, 3]];
        this.directX = 0;
        this.directY = 0;
        this.fieldX = 20;
        this.fieldY = 20;
    }

    initialisation() {
        for (var i = 0; i < this.length; i++) {
            var currentBodyPart = this.body[i];
            document.getElementById(currentBodyPart.join()).className = 'cell snake';
        }
    }

    move(timer) {
        this.directY = this.directX;
        var body = this.body;
        var head = this.body[this.length - 1];
        var direction = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ];
        var headCell = head.map(function (value, index) {
            return value + direction[this.directY][index]
        }, this);
        this.snakeEatOrGameOver(timer, headCell, body);
    }

    makeApple() {
        var x = Math.round(Math.random() * (this.fieldX - 1));
        var y = Math.round(Math.random() * (this.fieldY - 1));
        var apple = document.getElementById(x + ',' + y);
        if (apple.className == 'cell') {
            apple.className = "cell apple";
        }
        else {
            this.makeApple();
        }
        return apple;
    }

    snakeEatOrGameOver(timer, headCell) {
        var tmp = document.getElementById(headCell.join());
        if (tmp == null) {
            clearInterval(timer);
            SnakeModal.open(`<h1>Вы проиграли! Ваш счет: ${(this.length - 3)}</h1>
             <p class ='text'>Нажмите кнопку «Сбросить» или "F5" для начала новой игры!'</p>`);
        }
        if (tmp != null && tmp.className == 'cell') {
            var removePart = this.body.shift();
            this.body.push(headCell);
            document.getElementById(removePart.join()).className = 'cell';
            document.getElementById(headCell.join()).className = 'cell snake';
        } else {
            if (tmp != null && tmp.className == 'cell apple') {
                this.length++;
                this.body.push(headCell);
                document.getElementById(headCell.join()).className = 'cell snake';

                this.makeApple();

                var score = this.length - 3;
                document.getElementById('score').innerHTML = 'Ваш счет: ' + score;
            } else {
                if (tmp.className == 'cell snake') {
                    clearInterval(timer);
                    SnakeModal.open(`<h1>Вы проиграли! Ваш счет: ${(this.length - 3)}</h1>
                    <p>Нажмите кнопку «Сбросить» или "F5" для начала новой игры!'</p>`);
                }
            }
        }
    }
}