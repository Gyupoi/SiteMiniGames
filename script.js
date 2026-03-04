const button = document.getElementById('goButton');

function setButtonLink() {
    if (window.innerWidth <= 768) {
        button.onclick = () => location.href = '#games';
    } else {
        button.onclick = () => location.href = '#games-list';
    }
}

setButtonLink();
window.addEventListener('resize', setButtonLink);

const guessNumberGame = () => {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess = null;

    while (guess !== secretNumber) {
        guess = prompt("Угадайте число от 1 до 100:");

        if (guess === null) {
            alert("Игра отменена");
            break;
        }
        else if (guess === "") {
            alert("Введите число от 1 до 100");
        }
        else if (isNaN(guess)) {
            alert("Это не число. Попробуйте снова");
        }
        else {
            guess = Number(guess);

            if (guess < 1 || guess > 100) {
                alert("Число должно быть от 1 до 100");
            }
            else if (guess < secretNumber) {
                alert("Загаданное число БОЛЬШЕ 📈");
            }
            else if (guess > secretNumber) {
                alert("Загаданное число МЕНЬШЕ 📉");
            }
            else {
                alert(`🎉 Вы угадали число ${secretNumber}!`);
            }
        }
    }
};

function arithmeticTasks() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ["+", "-", "*", "/"];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let question;
    let correctAnswer;

    if (operator === "/") {
        correctAnswer = num1;
        const divisible = num1 * num2;
        question = `${divisible} / ${num2}`;
    }
    else if (operator === "+") {
        correctAnswer = num1 + num2;
        question = `${num1} + ${num2}`;
    }
    else if (operator === "-") {
        correctAnswer = num1 - num2;
        question = `${num1} - ${num2}`;
    }
    else if (operator === "*") {
        correctAnswer = num1 * num2;
        question = `${num1} * ${num2}`;
    }

    const answerRaw = prompt(`Решите пример: ${question}`);

    if (answerRaw === null) {
        alert("Игра отменена");
        return;
    }

    const userAnswer = Number(answerRaw);

    if (answerRaw === "" || isNaN(userAnswer)) {
        alert("Введите корректное число");
        return;
    }
    if (userAnswer === correctAnswer) {
        alert(`Верно!!!`)
    }
    else {
        alert(`Не верно!!! Верный ответ : ${correctAnswer}`);
    }
}

function Shifter() {
    const userText = prompt(`Введите любое слово или фразу`);

    if (userText === null) {
        alert("Вы отменили ввод");
        return;
    }

    if (userText === "") {
        alert("Вы ничего не ввели");
        return;
    }

    const reversedText = userText.split("").reverse().join("");
    alert(reversedText);
}


const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startQuiz() {
    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];

        let message = currentQuestion.question + "\n";
        message += currentQuestion.options.join("\n");

        const answerRaw = prompt(message);

        if (answerRaw === null) {
            alert("Вы отменили викторину");
            return;
        }

        if (answerRaw === "") {
            alert("Вы ничего не ввели");
            i--;
            continue;
        }

        const userAnswer = Number(answerRaw);

        if (isNaN(userAnswer)) {
            alert("Введите корректное число");
            i--;
            continue;
        }

        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
        }
    }

    alert("Вы ответили правильно на " + score + " из " + quiz.length + " вопросов.");
}


function rockPaperScissors() {

    let userChoice = prompt("Выберите: камень, ножницы или бумага");

    if (userChoice === null) {
        alert("Вы отменили игру");
        return;
    }

    userChoice = userChoice.trim().toLowerCase();

    if (userChoice === "") {
        alert("Вы ничего не ввели");
        return;
    }

    const options = ["камень", "ножницы", "бумага"];

    if (!options.includes(userChoice)) {
        alert("Введите корректный вариант: камень, ножницы или бумага");
        return;
    }

    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    const computerChoice = options[getRandomIndex(options.length)];

    let result;

    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    alert(
        "Ваш выбор: " + userChoice +
        "\nВыбор компьютера: " + computerChoice +
        "\nРезультат: " + result
    );
}

const btn_color = document.querySelector('#btn_color');

btn_color.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = (`rgb(${r}, ${g}, ${b})`);
    document.querySelector('main').style.backgroundColor = color;
})