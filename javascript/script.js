function updateTime() {
  let seattleElement = document.querySelector("#seattle");
  if (seattleElement) {
    let seattleDateElement = seattleElement.querySelector(".date");
    let seattleTimeElement = seattleElement.querySelector(".time");
    let currentSeattleTime = moment().tz("America/Los_Angeles");

    seattleDateElement.innerHTML = currentSeattleTime.format("MMMM Do YYYY");
    seattleTimeElement.innerHTML = currentSeattleTime.format(
      "h:mm:ss:SS[<small>]A[</small>]"
    );
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let currentLondonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = currentLondonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = currentLondonTime.format(
      "h:mm:ss:SS[<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone.length > 0) {
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML += ` 
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss:SS"
          )}<small>${cityTime.format("A")}</small></div>
        </div>`;
  }
}

updateTime();
setInterval(updateTime, 1);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
