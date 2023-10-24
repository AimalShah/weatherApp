 const input = document.querySelector("#input");
 const btn = document.querySelector(".btn");
 const img = document.querySelector(".img");
 const cityName = document.querySelector(".name");
 const temp = document.querySelector('.temp')
 const wind = document.querySelector('.wind')
 const humidity = document.querySelector('.humidity')
 const cloud = document.querySelector('.cloud');

const getWeather =  async () => {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e1b37fc4e19c4e618d1133032232010&q=${input.value}` , {mode : 'cors'});
    const data = await response.json();
    console.log(data);
    img.src = data.current.condition.icon;
    input.value = "";
    cityName.textContent = `${data.location.name} , ${data.location.country}`
    temp.innerHTML =` Feels Like : ${data.current.temp_c}&degC`; 
    wind.innerHTML = `Wind : ${data.current.wind_kph} KPH`;
    humidity.innerHTML = `Humidity : ${data.current.humidity}%`;
    cloud.innerHTML = `${data.current.cloud}% clouds`
   }
   getWeather();

btn.addEventListener('click', getWeather);


