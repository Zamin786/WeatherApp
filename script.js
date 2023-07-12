
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '95b80ce323msh4b8cfe5c4a883dbp1b0badjsnd507db62b134',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    const getWeather=(city)=>{
        cityName.innerHTML=city;
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response=>response.json())
        .then((response)=>{
            
            console.log(response)
            cloud_pct.innerHTML =response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_degrees
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
           
        })
        .catch(err=>console.log(err))
    }

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeather(city.value);
    
})

getWeather("Jammu");