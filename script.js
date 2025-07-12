let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let inputfield = document.querySelector(".inputSection input");
let searchBtn = document.querySelector(".inputSection button");
let img = document.querySelector(".Weather img");


const apiKey = "fab7c742b86cf6c2335a598403c81f07";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function checkWeather(place) {
    const response = await fetch(apiUrl + place + `&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);

        if(data.cod == "404"){
          document.querySelector(".error").style.display = "block";
          document.querySelector(".Weather").style.display = "none";
          return;
        }

        city.innerText = data.name ;
        temp.innerText = Math.round(data.main.temp)  + "°C";
        humidity.innerText = data.main.humidity + "%";
        wind.innerText = data.wind.speed + "km/h";



        if(data.weather[0].main == "Clouds"){
            img.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            img.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            img.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Rain"){
            img.src = "images/rain.png";
        }
        else if(data.weather[0].main === "Mist"){
            img.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            img.src = "images/snow.png";
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".Weather").style.display = "block";

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(inputfield.value);
})
inputfield.addEventListener("keypress", (event)=>{
         if(event.key == "Enter"){
            checkWeather(inputfield.value);
         }
})





