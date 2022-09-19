var button = document.querySelector(".btn");
var inputValue= document.querySelector(".inputValue");
var names= document.querySelector(".names");
var desc= document.querySelector(".desc");
var temp= document.querySelector(".temp");
var country = document.querySelector(".country")
var cityName = document.querySelector(".city")


button.addEventListener("click",()=>{

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=50a7aa80fa492fa92e874d23ad061374`)
.then(response => response.json())
// .then(data => console.log(data))
.then(data=>{
    var tempvalue = data['main']['temp'];
    var descValue = data['weather'][0]['description']; 
    var countryValue =data['sys']['country']
    temp.innerHTML="temperature: " + tempvalue;
    desc.innerHTML="description: " + descValue;
    cityName.innerHTML= "city: " + data['name']
    country.textContent="country: " + countryValue;
})

// .then(data => console.log(data))
.catch(err =>    alert("wrong city name"))

})