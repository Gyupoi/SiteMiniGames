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