'use strict';

let isNumber = function(n)  {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

let getRandom = function (min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    function guessNumber() {
        let userNumber = prompt('Угадай число от 1 до 100');
        if (userNumber === null) {
            alert('Игра окончена');
        } else if (userNumber < 1 || userNumber > 100) {
            alert('Число должно быть в диапазоне от 1 до 100');
            return guessNumber();
        } else if (!isNumber(userNumber)) {
            alert('Введи число!');
            return guessNumber();
        } else if (userNumber > randomNumber) {
            alert('Загаданное число меньше');
            return guessNumber();
        } else if (userNumber < randomNumber) {
            alert('Загаданное число больше');
            return guessNumber();
        } else alert('Поздравляю, Вы угадали!!!');
    }
    guessNumber();
};

getRandom(1, 100);