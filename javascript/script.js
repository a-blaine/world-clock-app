function updateTime() {
  let seattleElement = document.querySelector("#seattle");
  let seattleDateElement = seattleElement.querySelector(".date");
  let seattleTimeElement = seattleElement.querySelector(".time");
  let currentSeattleTime = moment().tz("America/Los_Angeles");

  seattleDateElement.innerHTML = currentSeattleTime.format("MMMM Do, YYYY");
  seattleTimeElement.innerHTML = currentSeattleTime.format(
    "h:mm:ss:SS[<small>]A[</small>]"
  );

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let currentLondonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = currentLondonTime.format("MMMM Do, YYYY");
  londonTimeElement.innerHTML = currentLondonTime.format(
    "h:mm:ss:SS[<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1);
