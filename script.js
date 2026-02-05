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