let bgmusic = document.getElementById("wii-u-music")

function playAudio() {
    bgmusic.play();
}

function pauseAudio() {
    bgmusic.pause();
}

function validate() {
    if (document.getElementById('play-pause')
        .checked) {
        playAudio();
        document.getElementById('play-pause-text')
            .textContent = 'Pause Music';
    } else {
        pauseAudio();
        document.getElementById('play-pause-text')
            .textContent = 'Play Music';
    }
}
document.getElementById('play-pause')
    .addEventListener('change', validate);
