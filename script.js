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