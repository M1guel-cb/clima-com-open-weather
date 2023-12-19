// const key = window.prompt('Digite a chave da API:')

const apiKey = 'd0425022457108bd81b069a40e84e96e';
const btn = document.querySelector('#btn');
const input = document.querySelector('#city');

const cidade = document.querySelector('#div-city span')
const temperetura = document.querySelector('#temp span')
const pais = document.querySelector('#country')
const desc = document.querySelector('#desc span')
const icon = document.querySelector('#icon-weather')
const umidade = document.querySelector('#umidade span')
const vento = document.querySelector('#vento span')

btn.addEventListener('click', (e) => {
    const city = input.value;
    mostrarDados(city);
})

const pegarDados = async(city) => {
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(urlApi);
    const data = await res.json();
    return data
}

const mostrarDados = async (city) => {
    const data = await pegarDados(city);
    cidade.innerHTML = `${data.name}`;
    umidade.innerHTML = `${data.main.humidity}`;
    vento.innerHTML = `${data.wind.speed}`;
    desc.innerHTML = data.weather[0].description;
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    temperetura.innerHTML = parseInt(`${data.main.temp}`);
    pais.src = `https://flagsapi.com/${data.sys.country}/flat/64.png`
}

mostrarDados('Itu');