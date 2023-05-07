// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {

  const select = document.getElementById('voice-select');
  const synth  = window.speechSynthesis;
  const img    = document.querySelector('img');
  let voices=[];

  synth.addEventListener('voiceschanged',function(){
    voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices.default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      select.appendChild(option);
    }

});


  document.querySelector("button").addEventListener("click", function() {
    const utterThis = new SpeechSynthesisUtterance(document.querySelector('#text-to-speak').value);
    const selectedOption = select.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.addEventListener('start',function(){
      img.src = `assets/images/smiling-open.png`;
    });
    utterThis.addEventListener('end',function(){
      img.src = `assets/images/smiling.png`;
    });

    synth.speak(utterThis);
  });
}