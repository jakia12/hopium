function toggleAudio() {
    var audioElement = document.getElementById('player')
    var soundOn = document.getElementById('play')
    var soundOff = document.getElementById('pause')
    if (audioElement.paused) {
      audioElement.play();
      $(soundOn).show();
      $(soundOff).hide();
    } else {
      audioElement.pause();
      $(soundOn).hide();
      $(soundOff).show();
    }
  } 