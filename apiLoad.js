console.log("start");
const API_Key = "521925cc9fd0238596df26474158c752";
const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
let cityID=524901;
fetch(`${API_URL}?id=${cityID}&appid=${API_Key}`)
.then(response=>{
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data=>{
    console.log(data);
})
.catch(error=>
    {
        console.error("some problem")
    });

    