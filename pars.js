
let id = localStorage.getItem('cityId') || "id=524901"; // Получаем id города из localStorage, если его нет, используем значение по умолчанию

const API_KEY = "521925cc9fd0238596df26474158c752";
const API_URL = "http://api.openweathermap.org/data/2.5/forecast?"+id+"&appid=" + API_Key;

$(document).ready(function() {
    $.getJSON(API_URL, function(data) {
        const currentWeather = data.list[0]; // Получаем данные о текущей погоде
        $('#dateNow').text(currentWeather.dt_txt);
        $('#temp').text((currentWeather.main.temp - 273).toFixed(1) + '°C');
        $('#realFeel').text('Real like: ' + (currentWeather.main.feels_like - 273).toFixed(1) + '°C');
        
        const sunriseTime = new Date(data.city.sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(data.city.sunset * 1000).toLocaleTimeString();
        const duration = (data.city.sunset - data.city.sunrise) / 3600; // Продолжительность дня в часах
        $('#sunrise').text('Sunrise: ' + sunriseTime);
        $('#sunset').text('Sunset: ' + sunsetTime);
        $('#duration').text('Day duration: ' + duration.toFixed(1) + ' hours');
        
        // Получаем URL иконки погоды
        const iconUrl = "http://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png";
        $('#imgStatus').attr('src', iconUrl); // Устанавливаем иконку погоды
        
        // Получаем данные о погоде на каждый из шести часов
        const hourlyData = data.list.slice(0, 6);

        // Заполняем таблицу данными
        hourlyData.forEach((hourData, index) => {
            // Устанавливаем иконку погоды
            $(`#imgStatus${index + 1}`).attr('src', `http://openweathermap.org/img/wn/${hourData.weather[0].icon}.png`);
            
            // Устанавливаем прогноз, температуру, ощущаемую температуру и скорость ветра
            $(`#time${index + 1}`).text(hourData.dt_txt);
            
            $(`#forecast${index + 1}`).text(hourData.weather[0].description);
            $(`#temp${index + 1}`).text((hourData.main.temp - 273.15).toFixed(2));
            $(`#realFeel${index + 1}`).text((hourData.main.feels_like - 273.15).toFixed(2));
            $(`#wind${index + 1}`).text(hourData.wind.speed);
        });
        for (let i = 1; i <= 5; i++) {
            const dayWeather = data.list[i * 8 - 1]; // Каждый следующий день находится в списке через 8 часов
            $(`#dayName${i}`).text(new Date(dayWeather.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }));
            $(`#date${i}`).text(new Date(dayWeather.dt * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }));
            $(`#weatherIcon${i}`).attr('src', `http://openweathermap.org/img/w/${dayWeather.weather[0].icon}.png`);
            $(`#temp${i}`).text((dayWeather.main.temp - 273.15).toFixed(1) + '°C');
            $(`#weatherDesc${i}`).text(dayWeather.weather[0].description);
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error fetching data:", errorThrown);
    });
});