import './style.css'
const volumeControl = document.getElementById('volume')
const buttons = document.querySelectorAll('button')
let currentAudio = null
let isPlaying = false;
volumeControl.addEventListener('input', (e) => {
    if (currentAudio) {
      currentAudio.volume = e.target.value;
    }
});
  
buttons.forEach(button => {
    button.addEventListener('click', () => {
      const soundName = button.dataset.sound;
      if (button.classList.contains('active')) {
        togglePlayback();
        return;
      }
      stopCurrentAudio();
      playSound(soundName);
    });
  });
  
  function playSound(soundName) {
    currentAudio = new Audio(`../public/static/sounds/${soundName}.mp3`);
    currentAudio.volume = volumeControl.value;
    currentAudio.loop = true;
    currentAudio.play();
    isPlaying = true;
  }
  
  function stopCurrentAudio() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    isPlaying = false;
  }
  
  function togglePlayback() {
    if (isPlaying) {
      currentAudio.pause();
      isPlaying = false;
    } else {
      currentAudio.play();
      isPlaying = true;
    }
  }