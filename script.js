const toggleinput = document.getElementById("toggleinput");
const toggleimg = document.getElementById("sound_toggle");
const bgm = document.getElementById("bgm");
const songs = ["musig 1.mp3", "musig 2.mp3", "musig 4 (dont ask what happened to musig 3).mp3"];
const nowplaying = document.getElementById("now_playing");

toggleinput.oninput = () => {
	let song = bgm.children[0].src.split("media/")[1].replaceAll("%20", " ");
	toggleimg.src = toggleinput.checked ? "media/sound_on.jpg" : "media/sound_off.jpg";
	if(toggleinput.checked) {
		bgm.play();
		nowplaying.innerText = "NOW PLAYING: " + song;
	} else {
		bgm.pause();
		nowplaying.innerText = "NOW not PLAYING: " + song;
	}
}

bgm.onended = () => {
	bgm.children[0].src = "media/" + songs[(songs.indexOf(bgm.children[0].src.split("media/")[1].replaceAll("%20", " "))+1) % 3].replaceAll(" ", "%20");
	bgm.pause(); bgm.load(); bgm.play();
	nowplaying.innerText = "NOW PLAYING: " + bgm.children[0].src.split("media/")[1].replaceAll("%20", " ");
}
