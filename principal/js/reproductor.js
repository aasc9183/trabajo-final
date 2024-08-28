document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const volumeControl = document.getElementById('volume');
    const cassettePlayer = document.getElementById('cassette-player');
    const floatButton = document.querySelector('.boton-flotante');
    
    const songs = [
        'song1.mp3',
        'song2.mp3'
    ];
    let currentSongIndex = 0;

    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.volume = 0.5;

    playButton.addEventListener('click', () => {
        audioPlayer.play();
    });

    pauseButton.addEventListener('click', () => {
        audioPlayer.pause();
    });

    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs.length - 1;
        audioPlayer.src = songs[currentSongIndex];
        audioPlayer.play();
    });

    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex < songs.length - 1) ? currentSongIndex + 1 : 0;
        audioPlayer.src = songs[currentSongIndex];
        audioPlayer.play();
    });

    volumeControl.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
    });

    floatButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (cassettePlayer.classList.contains('hidden')) {
            cassettePlayer.classList.remove('hidden');
            cassettePlayer.classList.add('visible');
            audioPlayer.play();
        } else {
            cassettePlayer.classList.remove('visible');
            cassettePlayer.classList.add('hidden');
            audioPlayer.pause();
        }
    });
});