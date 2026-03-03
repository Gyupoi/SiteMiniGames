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
        guess = Number(prompt("Угадайте число от 1 до 100:"));

        if (!guess || guess < 1 || guess > 100) {
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
        divisible = num1 * num2;
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
    else if (operator = "*") {
        correctAnswer = num1 * num2;
        question = `${num1} * ${num2}`;
    }

    const userAnswer = Number(prompt(`Решите пример: ${question}`));

    if (userAnswer === correctAnswer) {
        alert(`Верно!!!`)
    }
    else {
        alert(`Не верно!!! Верный ответ : ${correctAnswer}`);
    }
}

function Shifter() {
    const userText = prompt(`Введите любое слово или фразу`);

    if (userText !== null) {
        const reversedText = userText.split("").reverse().join("");
        alert(reversedText);
    } else {
        alert("Вы ничего не ввели.");
    }
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

        const userAnswer = prompt(message);

        if (Number(userAnswer) === currentQuestion.correctAnswer) {
            score++;
        }
    }

    alert("Вы ответили правильно на " + score + " из " + quiz.length + " вопросов.");
}


function rockPaperScissors() {

    let userChoice = prompt("Выберите: камень, ножницы или бумага");

    let options = ["камень", "ножницы", "бумага"];

    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    let computerChoice = options[getRandomIndex(options.length)];

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
        result = "Вы проиграли!"
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