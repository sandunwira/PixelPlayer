// DISPLAY GAME DETAILS IN THE PLAYER PAGE START ============================================================ //
window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = {
	"allowScriptAccess": false,
	"autoplay": "auto",
	"wmode": "window",
	"letterbox": "fullscreen",
	"warnOnUnsupportedContent": true,
	"contextMenu": "off",
	"logLevel": "error",
	"base": null,
	"frameRate": null,
	"quality": "high",
	"splashScreen": false,
	"favorFlash": true,
	"playerRuntime": "flashPlayer",
	"openUrlMode": "deny",
	"favorFlash": true,
	"scale": "showAll",
	"forceScale": true,
	"letterbox": "on",
	"preferredRenderer": "wgpu-webgl",
};

window.addEventListener("load", (event) => {
	const ruffle = window.RufflePlayer.newest();
	const player = ruffle.createPlayer();
	const container = document.getElementById("gameContainer");
	const soundBtn = document.getElementById("soundBtn");
	container.appendChild(player);

	fetch('localgames.json')
		.then(response => response.json())
		.then(data => {
			const gameID = parseInt(window.location.hash.substring(1), 10);
			const game = data.find(group => group.id === gameID);
			if (game) {
				const gameURL = game.link;
				const gameTitle = game.name;
				document.getElementById("gameTitle").innerText = gameTitle;
				player.load(gameURL).then(() => {
					console.info("Ruffle successfully loaded the file");
					if (localStorage.getItem("volume") == 0 || localStorage.getItem("volume") == null) {
						player.volume = 0;
						soundBtn.innerHTML = `<img style="height: 10px; filter: invert(99%) sepia(7%) saturate(31%) hue-rotate(343deg) brightness(104%) contrast(85%);" src="assets/images/ui/mute.svg"><span style="font-family: var(--light); font-size: 10px; letter-spacing: 0.5px;">Unmute</span>`;
						soundBtn.title = "Unmute";
						soundBtn.style.color = "#242424";
						soundBtn.style.background = "#ECECEC";
						soundBtn.style.transition = "0.3s";
						localStorage.setItem("volume", 0);
					} else if (localStorage.getItem("volume") == 1) {
						player.volume = 1;
						soundBtn.innerHTML = `<img style="height: 10px;" src="assets/images/ui/unmute.svg"><span style="font-family: var(--light); font-size: 10px; letter-spacing: 0.5px;">Mute</span>`;
						soundBtn.title = "Mute";
						soundBtn.style.color = "#ECECEC";
						soundBtn.style.background = "#424242";
						soundBtn.style.transition = "0.3s";
						localStorage.setItem("volume", 1);
					}
				}).catch((e) => {
					console.error(`Ruffle failed to load the file: ${e}`);
				});
			} else {
				console.error('Game not found for ID:', gameID);
			}
		})
		.catch(error => {
			console.error('Error fetching localgames.json:', error);
		});

	soundBtn.addEventListener("click", () => {
		if (player.volume == 1) {
			player.volume = 0;
			soundBtn.innerHTML = `<img style="height: 10px; filter: invert(99%) sepia(7%) saturate(31%) hue-rotate(343deg) brightness(104%) contrast(85%);" src="assets/images/ui/mute.svg"><span style="font-family: var(--light); font-size: 10px; letter-spacing: 0.5px;">Unmute</span>`;
			soundBtn.title = "Unmute";
			soundBtn.style.color = "#242424";
			soundBtn.style.background = "#ECECEC";
			soundBtn.style.transition = "0.3s";
			localStorage.setItem("volume", 0);
		} else {
			player.volume = 1;
			soundBtn.innerHTML = `<img style="height: 10px;" src="assets/images/ui/unmute.svg"><span style="font-family: var(--light); font-size: 10px; letter-spacing: 0.5px;">Mute</span>`;
			soundBtn.title = "Mute";
			soundBtn.style.color = "#ECECEC";
			soundBtn.style.background = "#424242";
			soundBtn.style.transition = "0.3s";
			localStorage.setItem("volume", 1);
		}
	});
});
// ============================================================== DISPLAY GAME DETAILS IN THE PLAYER PAGE END //