var num = parseInt(Math.random() * 10000);
const numero = document.querySelector('input#msg');
const keyStorage = localStorage.setItem('key-weather', num);
numero.value = num;

const popup = document.querySelector('#pop-up');
const btn = document.querySelector('#btn-pop-up');
if (sessionStorage.getItem('weathernow-code')) {
    popup.style.display = 'flex';
}

btn.addEventListener('click', () => {
    location.href = 'main.html';
})