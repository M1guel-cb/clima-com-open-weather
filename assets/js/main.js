const btn = document.querySelector('#btn');
const input = document.querySelector('#city');
const res = document.querySelector('#res');

const cidade = document.querySelector('#div-city span')
const temperetura = document.querySelector('#temp span')
const pais = document.querySelector('#country')
const desc = document.querySelector('#desc span')
const icon = document.querySelector('#icon-weather')
const umidade = document.querySelector('#umidade span')
const vento = document.querySelector('#vento span')

const paro = document.querySelector('#paro');
if (sessionStorage.getItem('weathernow-code')) {
    paro.style.display = 'none';
}

paro.addEventListener('click', () => location.href = 'index.html')

btn.addEventListener('click', (e) => {
    const city = input.value;
    mostrarDados(city);
})

document.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        mostrarDados(input.value)
    }
})

const pegarDados = async(city) => {
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(urlApi);
    const data = await res.json();
    return data
}

const mostrarDados = async (city) => {
    const data = await pegarDados(city);
    if (data.name == undefined) {
        alert('Cidade inexistente!')
        return
    }
    const helpDesc = `${data.weather[0].description}`;
    res.style.display = 'flex';
    cidade.innerHTML = `${data.name}`;
    umidade.innerHTML = `${data.main.humidity}`;
    vento.innerHTML = `${data.wind.speed}`;
    desc.innerHTML = helpDesc[0].toUpperCase() + helpDesc.substring(1);
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    temperetura.innerHTML = parseInt(data.main.temp);
    pais.src = `https://flagsapi.com/${data.sys.country}/flat/64.png`
}

const apiKey = window.prompt('Digite a chave da API:')