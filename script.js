window.addEventListener("load", init);
const lev = {
  low: 5,
};
let current = lev.low;
let timer = current;
let score = 0;
let isPlaying;
// elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timerDisplay = document.querySelector("#timer");
const seconds = document.querySelector("#seconds");
const words = [
  "laptop",
  "book",
  "coffee",
  "switch",
  "air",
  "html",
  "city",
  "java",
  "yahoo",
  "firewall",
  "fish",
  "watch",
  "mobile",
  "laptop",
  "grapes",
];
// Initialize Game
function init() {
  seconds.innerHTML = current;
  showWord(words);
  wordInput.addEventListener("input", startMatch);
  setInterval(countdown, 1000);
  setInterval(status, 50);
}
//Start match
function startMatch() {
  wordInput.value = wordInput.value.toLowerCase();
  if (matchWords()) {
    isPlaying = true;
    timer = current + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
  scoreDisplay.innerHTML = score;
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    return true;
  } else {
    return false;
  }
}

// random words
function showWord(word) {
  const random = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[random];
}

// timer
function countdown() {
  if (timer > 0) {
    timer--;
  } else if (timer === 0) {
    isPlaying = false;
  }
  timerDisplay.innerHTML = timer;
}

function status() {
  if (!isPlaying && timer === 0) {
    message.innerHTML = "Game Over";
    score = -1;
  }
}