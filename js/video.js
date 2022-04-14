var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false 
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	console.log('The current volume is ' + video.volume)
	document.querySelector('#volume').innerHTML = video.volume * 100+'%'
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("The current speed is " + video.playbackRate);
	video.playbackRate *= .95;
	console.log('The new speed is ' + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("The current speed is " + video.playbackRate);
	video.playbackRate /= .95;
	console.log('The new speed is ' + video.playbackRate)
});

// MUTED: MUST FINISH FROM LECTURE OVERVIEW
document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted); 
	// have to check if currenly muted --> 
	// if currenly muted, set muted to false & update text
	// else set muted to true & update text

	if (mute == true){ 

	}
	video.muted = true
});

// SLIDER: MUST FINISH FROM LECTURE OVERVIEW
document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value); 
	// Use this.value to update vid vol & volume element below
	
});





