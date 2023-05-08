// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti()
  const selectElement = document.getElementById("horn-select");
  const audioElement = document.querySelector("audio");
  const imageElements = document.querySelector("img");
  let volumeElement = document.getElementById("volume");
  const iconElement = document.querySelector("input + img");

  selectElement.addEventListener("change", () => {
    const selectedValue = selectElement.value;
    imageElements.src = `assets/images/${selectedValue}.svg`;
    audioElement.src = `assets/audio/${selectedValue}.mp3`;
  });

//volume slider
  volumeElement.addEventListener("input", () => {
    const currentVolume = volumeElement.value;
    let level = 3;
    if (currentVolume == 0) {
      level = 0;
    } else if (currentVolume< 33) {
      level = 1;
    } else if (currentVolume< 67) {
      level = 2;
    }
    iconElement.src = `assets/icons/volume-level-${level}.svg`;
    audioElement.volume = currentVolume/100;
  });

  document.querySelector("button").addEventListener("click", () => {
    audioElement.play();
    if (document.getElementById("horn-select").value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });

}