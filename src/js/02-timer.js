import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

flatpickr('#datetime-picker',{
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  });

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  const datePicker = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const dataMinutes = document.querySelector("[data-minutes]");
const dataSeconds = document.querySelector("[data-seconds]");
const dataDays = document.querySelector("[data-days]");
const dataHours = document.querySelector("[data-hours]");
const values = document.querySelectorAll(".value");

datePicker.addEventListener("change", () => {
    if (Date.now() > Date.parse(datePicker.value)) {
      startBtn.setAttribute("disabled", "");
      window.alert("Please choose a date in the future")
    } else {
      startBtn.removeAttribute("disabled", "");
    }
  });
  startBtn.addEventListener("click", () => {
    if (Date.now() > Date.parse(datePicker.value)) {
      startBtn.setAttribute("disabled", "");
      window.alert("Please choose a date in the future")
    } else if (Date.now() < Date.parse(datePicker.value)) {
      startBtn.removeAttribute("disabled", "");
     let timerId = setInterval(remainingTime, 1000);}
    });

    let remainingTime = () => {
        let timeLeft = Date.parse(datePicker.value) - Date.now();
        const seconds = convertMs(timeLeft).seconds;
        const days = convertMs(timeLeft).days;
        const hours = convertMs(timeLeft).hours;
        const minutes = convertMs(timeLeft).minutes;
        dataSeconds.innerHTML = `${seconds}`;
        dataDays.innerHTML = `${days}`;
        dataMinutes.innerHTML = `${minutes}`;
        dataHours.innerHTML = `${hours}`;
        values.forEach(value => {
          if (value.innerHTML.length < 2) {
            value.innerHTML = value.innerHTML.padStart(2, "0");
          }
        });
        if (timeLeft <= 0) {
          clearInterval(timerId);
          dataSeconds.innerHTML = '00';
          dataDays.innerHTML = '00';
          dataMinutes.innerHTML = '00';
          dataHours.innerHTML = '00';
          
        }
      };
      