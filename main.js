let isPlaying = false;

audioElement = new Audio("audio/Makaih Beats - Reflection.mp3");
audioElement.addEventListener(
	"canplay",
	function () {
		audioElement.play();
		isPlaying = true;
	},
	false
);
audioElement.addEventListener(
	"ended",
	function () {
		this.currentTime = 0;
		this.play();
	},
	false
);

const playButton = document.querySelector("#playButton");
const svgButton = document.querySelector("#btn-toggle");

playButton.addEventListener("click", function () {
	if (isPlaying) {
		audioElement.pause();
		svgButton.classList.toggle("fa-circle-play");
		svgButton.classList.toggle("fa-circle-pause");
	} else {
		audioElement.play();
		svgButton.classList.toggle("fa-circle-play");
		svgButton.classList.toggle("fa-circle-pause");
	}
	isPlaying = !isPlaying;
});

// const playButton = document.querySelector("#playButton");

// playButton.addEventListener("click", togglePlay());

// function togglePlay() {
// 	if (playButton.classList.contains("fa-circle-pause")) {
// 		// playButton.classList.remove("fa-circle-pause");
// 		playButton.classList.toggle("fa-circle-play");
// 		console.log("is paused");
// 		audioElement.pause();
// 	} else {
// 		// playButton.classList.remove("fa-circle-play");
// 		playButton.classList.toggle("fa-circle-pause");
// 		audioElement.play();
// 		console.log("resumed");
// 	}
// }
