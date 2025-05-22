function currentTime() {
  const date = new Date();
  const day = date.getDay();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  const month = date.getMonth();
  let curr_date = date.getDate();
  const year = date.getFullYear();

  const month_name = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const showDay = document.querySelectorAll(".day__wrapper span");
  let midday = hour >= 12 ? "PM" : "AM";
  hour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  curr_date = updateTime(curr_date);

  document.querySelector("#time").innerHTML = `${hour}:${min}`;
  document.querySelector("#sec").innerHTML = sec;
  document.querySelector("#med").innerHTML = midday;
  document.querySelector(
    "#full__date"
  ).innerHTML = `${month_name[month]} ${curr_date} ${year}`;

  // Reset opacity
  showDay.forEach((span) => span.classList.remove("active"));
  // Highlight current day
  showDay[day].classList.add("active");
}

function updateTime(k) {
  return k < 10 ? "0" + k : k;
}

setInterval(currentTime, 1000);
currentTime();

// Toggle Theme
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleBtn.textContent = document.body.classList.contains("light-mode")
    ? "🌞 Light Mode"
    : "🌙 Dark Mode";
});
