var num = parseInt(Math.random() * 10000);
const numero = document.querySelector('input#msg');
const keyStorage = localStorage.setItem('key-weather', num);
numero.value = num;