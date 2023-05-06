// explore.js
const speechSynthesis = window.speechSynthesis;
window.addEventListener('DOMContentLoaded', init);

function init() {
  const voices = speechSynthesis.getVoices();
  for (const voice of voices) {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = voice.name;
    document.getElementById("voice-select").appendChild(option);
  }
  // Set the default voice.
  const defaultVoice = voices[0];
  document.getElementById("voice-select").value = defaultVoice.name;
  // Set the event listener for the "Press to Talk" button.
  document.getElementById("press-to-talk").addEventListener("click", speak);

}
function speak() {
  // Get the text to speak.
  const text = document.getElementById("text-to-speak").value;

  // Get the selected voice.
  const voice = document.getElementById("voice-select").value;

  // Create a new SpeechSynthesisUtterance object.
  const utterance = new SpeechSynthesisUtterance(text);

  // Set the voice of the utterance.
  utterance.voice = voice;

  // Speak the utterance.
  speechSynthesis.speak(utterance);

  // Change the face to open mouthed.
  document.getElementById("smiling").src = "assets/images/smiling.png";
}
