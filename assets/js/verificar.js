const submit = document.querySelector('input[type="submit"]');
const number = document.querySelector('#num');
const popup = document.querySelector('#pop-up');
const btn = document.querySelector('#btn-pop-up');
if (sessionStorage.getItem('weathernow-code')) {
    popup.style.display = 'flex';
}

btn.addEventListener('click', () => {
    location.href = 'senha.html';
})

submit.addEventListener("click", (e) => {
    const key = Number(localStorage.getItem("key-weather"));
    if (key == number.value) {
        sessionStorage.setItem('weathernow-code', true)
        location.href = 'senha.html';
    } else {
        window.alert('Código errado!');
    }
});