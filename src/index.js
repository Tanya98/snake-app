import './styles/index.scss';
import { Snake } from './snake';
import { Field } from './field';

let fieldX = 20;
let fieldY = 20;

let KEY = {
    'left': 37,
    'up': 38,
    'right': 39,
    'down': 40
};

let timer;
const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');

let snake = new Snake();

let field = new Field(snake);

var keyHandler = (event) => {
    switch (event.keyCode) {
        case KEY.left:
            if (snake.directY != 0) {
                snake.directX = 2;
            }
            break;
        case KEY.right:
            if (snake.directY != 2) {
                snake.directX = 0;
            }
            break;
        case KEY.up:
            if (snake.directY != 1) {
                snake.directX = 3;
            }
            break;
        case KEY.down:
            if (snake.directY != 3) {
                snake.directX = 1;
            }
            break;
        default:
            return;
    }
}
window.addEventListener('keydown', keyHandler, false);


easy.addEventListener('click', () => {
    timer = setInterval(function () {
        snake.move(timer);
    }, 400);
});
medium.addEventListener('click', () => {
    timer = setInterval(function () {
        snake.move(timer);
    }, 200);
});
hard.addEventListener('click', () => {
    timer = setInterval(function () {
        snake.move(timer);
    }, 100);
});

field.drawGameField(fieldX, fieldY);