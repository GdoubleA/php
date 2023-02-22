let minValue = parseInt(prompt('Минимальное знание числа для игры', '-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '999'));
minValue < -999 ? minValue = -999 : minValue;
maxValue > 999 ? maxValue = 999 : maxValue;
minValue !== minValue ? minValue = minValue || -999 : minValue;
maxValue !== maxValue ? maxValue = maxValue || 999 : maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let resultTextNumber = "";

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
resultTextNumber = TranslateIntToText(answerNumber);
questionRand();

// Заново
document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 1;
    gameRun = true;
    minValue = parseInt(prompt('Минимальное знание числа для игры', '-999'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '999'));
    minValue < -999 ? minValue = -999 : minValue;
    maxValue > 999 ? maxValue = 999 : maxValue;
    minValue !== minValue ? minValue = minValue || -999 : minValue;
    maxValue !== maxValue ? maxValue = maxValue || 999 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    resultTextNumber = TranslateIntToText(answerNumber);
    questionRand();

})

// Больше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            phraseRand();
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            resultTextNumber = TranslateIntToText(answerNumber);
            questionRand();
        }
    }
})

// Меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            phraseRand();
            gameRun = false;
        } else {
            if (minValue === answerNumber) {
                phraseRand();
                gameRun = false;
            } else {
                maxValue = answerNumber - 1;
                answerNumber = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                resultTextNumber = TranslateIntToText(answerNumber);
                questionRand();
            }
        }
    }
})

// Равно
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const totalRandom = Math.round(Math.random() * 3);
        switch (totalRandom) {
            case 0:
                answerField.innerText = `Я всегда угадываю\u{1F60E}\n`;
                break;
            case 1:
                answerField.innerText = `Победа! \u{1F973}`;
                break;
            case 2:
                answerField.innerText = `Как всегда прав! \u{1F60A}`;
                break;
            case 3:
                answerField.innerText = `Еле выиграл!`;
                break;
        }
        gameRun = false;
    }
})

// Вопросы
function questionRand() {
    const questionRandom = Math.round(Math.random() * 3);
    switch (questionRandom) {
        case 0:
            answerField.innerText = `Да это легко, вы загадали число: ${resultTextNumber}?`;
            break;
        case 1:
            answerField.innerText = `загаданное вами число это: ` + ` ${resultTextNumber}?`;
            break;
        case 2:
            answerField.innerText = `Ваше число: ` + ` ${resultTextNumber}?`;
            break;
        case 3:
            answerField.innerText = `Ответ: ` + ` ${resultTextNumber}?`;
            break;
    }
}

// Фразы
function phraseRand() {
    const phraseRandom = Math.round(Math.random() * 3);
    switch (phraseRandom) {
        case 0:
            answerField.innerText = `Неправильно загадано число\n\u{1F914}`;
            break;
        case 1:
            answerField.innerText = `Загадывайте число правильно!`;
            break;
        case 2:
            answerField.innerText = `Попробуй сначала`;
            break;
    }
}


// Перевод в текст
function TranslateIntToText(textNumber) {
    let unitsResult = "";
    let secUnitsResult = "";
    let tensResult = "";
    let hundResult = "";
    let checkResult = "";
    let units = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    let secondUnits = ["десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    let tens = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
    let hundreds = ["сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];


    if (textNumber > 0) {

        if ((textNumber % 100 > 0 && textNumber % 100 < 10) || (textNumber % 10 > 0 && textNumber % 10 < 10))
            unitsResult = units[textNumber % 10];

        if (textNumber % 100 > 9 && textNumber % 100 < 20)
            secUnitsResult = secondUnits[textNumber % 10];

        if (Math.trunc(textNumber % 100 / 10) > 1 && Math.trunc(textNumber % 100 / 10) < 10)
            tensResult = tens[Math.trunc(textNumber % 100 / 10) - 2];

        if (Math.trunc(textNumber / 100) > 0 && Math.trunc(textNumber / 100) < 10)
            hundResult = hundreds[Math.trunc(textNumber / 100) - 1]

        checkResult = `${hundResult} ${tensResult} ${secUnitsResult}${unitsResult}`;

        if (checkResult.length < 20) {
            textNumber = checkResult;
            return textNumber;

        } else
            return textNumber;

    } else if (textNumber < 0) {

        textNumber *= -1;
        let minus = "минус"

        if ((textNumber % 100 > 0 && textNumber % 100 < 10) || (textNumber % 10 > 0 && textNumber % 10 < 10))
            unitsResult = units[textNumber % 10];

        if (textNumber % 100 > 9 && textNumber % 100 < 20)
            secUnitsResult = secondUnits[textNumber % 10];

        if (Math.trunc(textNumber % 100 / 10) > 1 && Math.trunc(textNumber % 100 / 10) < 10)
            tensResult = tens[Math.trunc(textNumber % 100 / 10) - 2];

        if (Math.trunc(textNumber / 100) > 0 && Math.trunc(textNumber / 100) < 10)
            hundResult = hundreds[Math.trunc(textNumber / 100) - 1]

        checkResult = `${hundResult} ${tensResult} ${secUnitsResult}${unitsResult}`;

        if (checkResult.length < 20) {
            textNumber = `${minus} ${hundResult} ${tensResult} ${secUnitsResult}${unitsResult}`;
            return textNumber;
        } else
            return textNumber *= -1;

    } else {
        units = ["ноль"];
        return textNumber = units[textNumber];
    }
}