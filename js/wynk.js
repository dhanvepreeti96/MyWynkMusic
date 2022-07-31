var audioElement=document.getElementById('audio');
var playBTN=document.getElementById('playBTN');
var myprogressbar=document.getElementById('mybar');
var count=0;

function PlayPause(){
    if(count==0)
    {
        count=1;
        audioElement.play();
        playBTN.innerHTML="&#9208;";
        gifImage.style.opacity=1;
    }
    else{
        count=0;
        audioElement.pause();
        playBTN.innerHTML="&#9658;";
        gifImage.style.opacity=0;
    }
}

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
});

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime= myprogressbar.value*audioElement.duration/100;
})




