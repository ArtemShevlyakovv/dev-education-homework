
//инпуты диапазона
var minValueInput = document.querySelector('.minValue');
var maxValueInput = document.querySelector('.maxValue');

//кнопки
var randomButton = document.querySelector('.random');
var resetButton = document.querySelector('.reset');

//'Невидимые' элементы
var generNum = document.querySelector('.generatedNumber');

//другое
var genNum = [];
var isGen = false,
    min,
    max;


function randCheck() {
    if (!isGen) {
        min = Number(minValueInput.value);
        max = Number(maxValueInput.value);
        var difference = max - min;

        if (min >= max || min < 0 && max < 0) {
            generNum.textContent = 'Wrong range, check out your values';
            return;
        }
        if (!isInteger(min) || !isInteger(max)) {
            generNum.textContent = 'It seems you entered not an integer, maybe a string at all';
            return;
        }
        for (var i = 0; i <= difference; i++) {
            genNum[i] = min + i;
        }
        isGen = true;
    }

    if (genNum.length === 0) {
        generNum.textContent = `Generated number: Elements are over`;
        randomButton.disabled = true;
        return;
    }

    var randNumb = random(0, genNum.length);
    var arrElem = genNum[randNumb];

    generNum.textContent = `Generated number: ${arrElem}`;
    genNum.splice(randNumb, 1);
}



function resetVal() {
    minValueInput.value = '';
    maxValueInput.value = '';
    generNum.textContent = 'Choose range';
    genNum = [];
    isGenerated = false;
    generateBtn.disabled = false;
}





function random(min, max) {
    var difference = max - min;
    var randNumb = Math.floor((Math.random() * difference) + min);
    return randNumb;
}

function isInteger(num) {
    return (num ^ 0) === num;
}




randomButton.addEventListener('click', randCheck);

resetButton.addEventListener('click', resetVal)





