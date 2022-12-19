function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const startBtn = document.querySelector("button[data-start]")
const stopBtn = document.querySelector("button[data-stop]")
stopBtn.disabled = true
let interval = null;

const stopInterval = () => {
 if (interval) clearInterval(interval);
    stopBtn.setAttribute("disabled", "");
    startBtn.removeAttribute("disabled", "");
}

const startInterval = () => {
    if (interval) clearInterval(interval);
  startBtn.setAttribute("disabled", "");
  stopBtn.removeAttribute("disabled", "");

  interval = setInterval(() => {
    
  document.body.style.backgroundColor = getRandomHexColor();

  }, 1000);
};



startBtn.addEventListener("click", startInterval);
stopBtn.addEventListener("click", stopInterval);
