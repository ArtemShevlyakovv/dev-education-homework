
//Guess часть
var guessField = document.querySelector('.guessField'); //инпут вашего числа
var guessSubmit = document.querySelector('.guessSubmit'); //кнопка

//"невидимые" элементы
var lowOrHi = document.querySelector('.lowOrHi'); //текст, указывающий выше или ниже наше значение
var lastResult = document.querySelector('.lastResult'); //текст, уведомляющий о победе/поражении
var guesses = document.querySelector('.guesses'); //попытки угадать
var maxMinErr = document.querySelector('.maxMinErr'); // сообщение, которое вылазит при некорректном вводе min max

//вставка текст
var minText = document.querySelector('.min-text'); //эти значения будут показывать выбранный диапазон в тексте
var maxText = document.querySelector('.max-text');
var attemptsText = document.querySelector('.attempts-text');

//настройки
var attemptsInput = document.querySelector('.attempts'); // введённое колво попыток
var minValueInput = document.querySelector('.minValue'); // введённая нижняя граница
var maxValueInput = document.querySelector('.maxValue'); // введённая верхняя граница
var goRange = document.querySelector('.goRange'); // кнопка 'задать диапазон'

// значения по умолчанию
var attempts = 5;
var minValue = 0; //значение по умолчанию для нижней границы
var maxValue = 100; // значение по умолчанию для верхней границы
var randomNumber = Math.floor(Math.random() * (maxValue - minValue) + minValue); //расчёт рандомного числа


var guessCount = attempts;
var resetButton;



//функция, реагирующая на введённые числа
guessField.focus();

function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 0) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount--;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);



//функция, настраивающая диапазон

goRange.addEventListener('click', function () {
    var minInputVal = minValueInput.value;
    var maxInputVal = maxValueInput.value;
    var attemptsVal = attemptsInput.value;

    if (Number(minInputVal) > Number(maxInputVal) && Number(maxInputVal) > 200 && Number(minInputVal) < 1) {
        return maxMinErr.textContent = 'Минимальное число должно быть меньше максимального'
    }

    if (minInputVal) minValue = +minInputVal
    if (maxInputVal) maxValue = +maxInputVal
    if (attemptsVal) attempts = +attemptsVal

    minValueInput.value = '';
    maxValueInput.value = '';
    attemptsInput.value = '';
    randomNumber = Math.round(Math.random() * (maxValue - minValue) + minValue);
    guessCount = attempts;

    minText.textContent = minValue;
    maxText.textContent = maxValue;
    attemptsText.textContent = attempts;
})


function validSetting(e, max, min, elem) {
    if (e.key === '.' || e.key === ',') e.preventDefault()
    if (+(elem.value + e.key) > max) e.preventDefault()
    if (+(elem.value + e.key) < min) e.preventDefault()
}

attemptsInput.addEventListener('keypress', function (e) {
    validSetting(e, 15, 1, attemptsInput)
})
minValueInput.addEventListener('keypress', function (e) {
    validSetting(e, 198, 1, minValueInput)
})
maxValueInput.addEventListener('keypress', function (e) {
    validSetting(e, 200, 1, maxValueInput)
})


//функция, вызывающаяся при окончании игры
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
console.log(randomNumber);

