const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e0d9f1652amsh0e8d77bdfac922ep15158ajsn51bbac684f1f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather=(city)=>{
    cityName.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response =>         {

        console.log(response)
        // cloud_pct = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getweather(city.value)
    
})

getweather("bangalore")