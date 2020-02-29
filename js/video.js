var video;

function getVid() {
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
video.playbackRate -=.2;
	  console.log("Speed is "+video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate +=.25;
	console.log("Speed is "+video.playbackRate);
} 

function skipAhead() {
video.currentTime +=60;
	if(video.ended) {
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  	if (video.muted){
		console.log("Changing to Unmuted");
		video.muted = false;
		let num=document.querySelector("#mute");
		num.innerHTML="Mute";
	  }
	else{
		console.log("Changing to muted");
		video.muted = true;
		let num=document.querySelector("#mute");
		num.innerHTML="Unmute";
		}
}

function changeVolume() {
	video.volume=document.querySelector("#volumeSlider").value/100;
	let vol=document.querySelector("#volume");
	vol.innerHTML=video.volume*100+"%";
	console.log("Volume is "+ video.volume*100+"%");
}
       

function gray() {
	video.classList.add("grayscale");

	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color");
}
