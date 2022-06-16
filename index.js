const DaysEl = document.getElementById("Days");
const hourEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secondsEl = document.getElementById("seconds");
const newYears = "1 jan 2023";

function countDown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();
  //divided by 1000 bcz it was in milisec
  const totalSeconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const min = Math.floor(totalSeconds / 60) % 24;
  const sec = Math.floor(totalSeconds % 60);

  DaysEl.innerHTML = days;
  hourEl.innerHTML = format(hours);
  minEl.innerHTML = format(min);
  secondsEl.innerHTML = format(sec);
}
function format(time) {
  return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);
