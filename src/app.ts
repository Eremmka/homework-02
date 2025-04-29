import './style.css'
const volumeControl = document.getElementById('volume') as HTMLInputElement
const buttons = document.querySelectorAll('button')
let currentAudio: HTMLAudioElement
let isPlaying = false;
volumeControl.addEventListener('input', () => {
  const volumeValue = parseFloat(volumeControl.value);
  currentAudio.volume = volumeValue;
}); 

buttons.forEach(button => {
    button.addEventListener('click', () => {
      const soundName: string | undefined = button.dataset.sound;
      if (button.classList.contains('active')) {
        togglePlayback();
        return;
      }
      stopCurrentAudio();
      playSound(soundName);
    });
  });
  
  function playSound(soundName: string | undefined) {
    currentAudio = new Audio(`../public/static/sounds/${soundName}.mp3`)

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