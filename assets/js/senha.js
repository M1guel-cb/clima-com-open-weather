const olho = document.querySelector(".fa-eye");
const olhoFechado = document.querySelector(".fa-eye-slash");
const input = document.querySelector('#senha');
const btn = document.querySelector('button');

olho.addEventListener('click', () => {
    input.type = 'password'
    olho.style.display = 'none';
    olhoFechado.style.display = 'inline';
});

olhoFechado.addEventListener('click', () => {
    input.type = 'text'
    olho.style.display = 'inline';
    olhoFechado.style.display = 'none';
});

btn.addEventListener('click', () => {
    if (input.value == 'Mcb291107.') {
        location.href = 'main.html';
    } else {
        window.alert('Senha incorreta!')
    }
})