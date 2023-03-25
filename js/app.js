// ⏰Feature #1
// In your project, display the current date and time using JavaScript: Tuesday 16:00

// 🕵️‍♀️Feature #2
// Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

// 🙀Bonus Feature
// Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.

let currentTime = new Date();

let time = currentTime.toLocaleTimeString('en-US'); 

// use dom innerhtml to update the date and time upon loading 

let updateTime= document.querySelector("#time-info");

function updateDateInfo(event){
event.preventDefault();
updateTime.addEventListener("load", updateDateInfo);
updateTime.innerHTML="currentTime.time";
}



function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];
  let formattedDate= `${currentDay}  ${time}`;

  return formattedDate;
}

console.log(formatDate(currentTime));