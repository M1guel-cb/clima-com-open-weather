// const key = window.prompt('Digite a chave da API:')

const apiKey = 'd0425022457108bd81b069a40e84e96e';
const btn = document.querySelector('#btn');
const input = document.querySelector('#city');

btn.addEventListener('click', (e) => {
    const city = input.value;
    mostrarDados(city);
})

const pegarDados = async(city) => {
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(urlApi);
    const data = await res.json();
}

const mostrarDados = (city) => {
    pegarDados(city)
}