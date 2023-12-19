const submit = document.querySelector('input[type="submit"]');
const number = document.querySelector('#num');

submit.addEventListener("click", (e) => {
    const key = Number(localStorage.getItem("key-weather"));
    if (key == number.value) {
        location.href = 'http://127.0.0.1:5500/senha.html'
    } else {
        window.alert('Código errado!');
    }
});