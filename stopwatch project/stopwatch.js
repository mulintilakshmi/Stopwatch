

    



const timerElement = document.querySelector('.timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timerInterval;
let elapsedTime = 0;


function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const ms = milliseconds % 1000;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(
    Math.floor(ms / 10)
  ).padStart(2, '0')}`;
}


function startTimer() {
  const startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerElement.textContent = formatTime(elapsedTime);
  }, 10);
}


function stopTimer() {
  clearInterval(timerInterval);
}


function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timerElement.textContent = '00:00:00';
}


startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

