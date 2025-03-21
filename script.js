const audio=document.getElementById("player");
const currentSongTitle=document.getElementById("currentSongTitle")
const playlist=[
    {file:"aylex-winery.mp3", title:"aylex-winery"},
    {file: "fsm-team-happy-days.mp3", title:"fsm-team-happy-days" },
    {file: "piki-to-the-glowing-forest.mp3", title:"piki-to-the-glowing-forest"}
    
];
let currentSongIndex=0;
function loadSong(index){
    currentSongIndex=index;
    const song=playlist[index];
    audio.src=song.file
    currentSongTitle.textContent=song.title
    audio.load();
    audio.play()
}

function playAudio(){
    audio.play();
}

function pauseAudio(){
    audio.pause();
}

function stopAudio(){
    audio.pause();
    audio.currentTime=0;
}
function nextSong(){
    currentSongIndex=(currentSongIndex+1) % playlist.length;
    loadSong(currentSongIndex);
}
window.onload=function(){
    loadSong(0);
}