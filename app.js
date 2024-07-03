function realDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[date.getDay()];
  return `${day}`;
}

function realTime(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return ` ${hours}:${minutes} minutes`;
}

let dateElement = document.querySelector("#currentDay");
let currentDate = new Date();
dateElement.innerHTML = realDate(currentDate);
let timeElement = document.querySelector("#currentTimeUTC");
let currentTime = new Date();

timeElement.innerHTML = realTime(currentTime);
