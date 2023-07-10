/*-------------------------------------------
  Music button
-------------------------------------------*/
function playmusic () {
    let musicbtn = document.querySelector('.music-btn');
    let musicicon = document.querySelector('.music-icon');
    let mymusic = document.getElementById('mymusic');
    mymusic.volume = 0.3;
    mymusic.loop = true;

    if (musicbtn.classList.contains('stop')) {
        musicbtn.classList.replace('stop', 'play');
        musicicon.classList.replace('bi-play', 'bi-pause');
        mymusic.play();
    } else {
        musicbtn.classList.replace('play', 'stop');
        musicicon.classList.replace('bi-pause', 'bi-play');
        mymusic.pause();
    }
}