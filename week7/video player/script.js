const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-Pause-Img");
console.log(playPauseImg );

playPauseButton.addEventListener("click",playPauseVideo);

function playPauseVideo()
{
    if(myVideo.paused || myVideo.ended) {
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png"
        myVideo.play();
    } else {
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png"
        myVideo.pause();
    }


}