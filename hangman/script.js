const wordElement = document.getElementById("word");
const wrongLettersElement = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "selector", "dragon"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
  wordElement.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        letter =>
          `<span class="letter">${
            correctLetters.includes(letter) ? letter : ""
          } </span>`
      )
      .join("")}
      `;
  const innerWord = wordElement.innerText.replace(/\n/g, "");
  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You Won";
    popup.style.display = "flex";
  }
}

window.addEventListener("keydown", e => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLetters();
      }
    }
  }
});

function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 4000);
}

function updateWrongLetters() {
  // display wrong letters
  wrongLettersElement.innerHTML = `${
    wrongLetters.length > 0 ? "<p>Wrong</p>" : ""
  }
  ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

  //display parts
  figureParts.forEach((part, i) => {
    const errors = wrongLetters.length;
    if (i < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  //check if lost
  if (wrongLetters.length == figureParts.length) {
    finalMessage.innerText = "Unfortunately you lost";
    popup.style.display = "flex";
  }
}

// restart game
playAgainBtn.addEventListener("click", () => {
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayWord();
  updateWrongLetters();
  popup.style.display = "none";
});
displayWord();
