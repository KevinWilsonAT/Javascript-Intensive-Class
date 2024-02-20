const audioChapter = document.getElementById('audio-chapter');
const chapterName = document.getElementById('chapter');
const numberChapters = 10;

const btnPlayPause = document.getElementById('play-pause');
const btnNext = document.getElementById('forward');
const btnPrev = document.getElementById('back');

let isPlaying = 0;
let currentChapter = 1;

function playTrack(){

    audioChapter.play();
    btnPlayPause.classList.remove('bi-play-circle-fill');
    btnPlayPause.classList.add('bi-pause-circle-fill');
}

function pauseTrack(){

    audioChapter.pause();
    btnPlayPause.classList.remove('bi-pause-circle-fill');
    btnPlayPause.classList.add('bi-play-circle-fill');
}

function playOrPause(){

    if ( isPlaying === 0 ){
        playTrack();
        isPlaying = 1;
    }
    else{
        pauseTrack();
        isPlaying = 0;
    }
}

function swapChapterName(){
    chapterName.innerText = 'Capítulo ' + currentChapter;
}

function nextTrack(){

    if (currentChapter === numberChapters) {
        currentChapter = 1;
    }
    else{
        currentChapter = currentChapter + 1;
    }

    audioChapter.src = "./src/media/dom-casmurro/"+currentChapter+".mp3";

    playTrack();

    isPlaying = 1;

    swapChapterName();
}

function prevTrack(){
    
    if (currentChapter === 1) {
        currentChapter = numberChapters;
    }
    else{
        currentChapter = currentChapter - 1;
    }

    audioChapter.src = "./src/media/dom-casmurro/"+currentChapter+".mp3";
    playTrack();
    isPlaying = 1;
    swapChapterName();
}

btnPlayPause.addEventListener('click', playOrPause);
btnNext.addEventListener('click', nextTrack);
btnPrev.addEventListener('click', prevTrack);