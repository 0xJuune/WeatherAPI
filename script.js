// `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=acc27dc5d91e6fce5617ad733b8ff88b`


// let city = null

const regexZip = new RegExp('[0-9]{5}(?:-[0-9]{4})?')
const regexCity = new RegExp('([A-Za-z]+)')
const inputField = document.getElementById('location')
const inputButton = document.getElementById('butt')
const tempContainer = document.getElementById('tempContainer')
const cityDiv = document.getElementById('cityName')
const weatherOne = document.getElementById('weatherSummary')

let dataStore = null




async function grabWeatherData (formInputValue) {
    if (regexZip.test(formInputValue)) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${formInputValue}&appid=acc27dc5d91e6fce5617ad733b8ff88b&units=imperial`);
        const weatherData = await response.json();
        console.log(weatherData);
        // console.log(weatherData.name);
        dataStore = weatherData
    }
    else if (regexCity.test(formInputValue)) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${formInputValue}&appid=acc27dc5d91e6fce5617ad733b8ff88b&units=imperial`)
        const weatherData = await response.json();
        console.log(weatherData);
        // console.log(weatherData.name);
        dataStore = weatherData
    }
    else {
        console.log('Regex Failed')
    }

    displayData();

}


const displayData = () => {
    cityDiv.textContent = `${dataStore.name}`
    weatherOne.textContent = `${dataStore.weather[0].main}`
}




inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        grabWeatherData(inputField.value);
        console.log('entered')
    }
})






// inputField.addEventListener("keypress", function(event) {
//     if (event.key === "enter") {
//         event.preventDefault();
//         grabWeatherData(inputField.value);
//         console.log('entered')
//     }
// })



// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=acc27dc5d91e6fce5617ad733b8ff88b`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
    
// fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=acc27dc5d91e6fce5617ad733b8ff88b`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
    