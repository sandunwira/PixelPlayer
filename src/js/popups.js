// ABOUT POPUP START ====================================================================== //
const aboutPopup = document.getElementById('aboutPopup');
const aboutBtn = document.getElementById('aboutBtn');

var aboutHTML = `
	<div class="flex flexCol" style="height: auto; min-width: 400px; width: 65%; background: #424242; border-radius: 10px; align-items: center; justify-content: center;">
		<div class="flex flexCol" style="height: calc(100% - 80px); width: calc(100% - 60px); padding: 30px 30px 50px 30px; gap: 10px; background: #242424; border-radius: 10px;">
			<div class="flex flexCol" style="width: 100%; align-items: center; gap: 50px;">
				<div class="flex" style="height: 65px; width: auto; padding: 40px 0 0 0; align-items: center; justify-content: center; margin-bottom: -40px;">
					<img src="assets/images/logo-text.png" style="height: 100%; width: auto;">
				</div>

				<p style="color: #B0B0B0; font-family: var(--light);">PixelPlayer is a project aims for reviving the old flash games that were once popular on the internet.</p>

				<span class="flex flexRow" style="align-items: center; gap: 15px;">
					<a class="titlebarBtn flex" style="color: #ECECEC; padding: 5px 10px; text-decoration: none;" title="This will open the browser" target="_blank" href="https://bit.ly/PixelPlayerCredits">
						<img style="height: 14px;" src="assets/images/ui/credits.svg">
						<span style="font-family: var(--light); font-size: 14px; letter-spacing: 0.5px;">Credits</span>
						<img style="height: 12px; filter: invert(61%) sepia(38%) saturate(5928%) hue-rotate(176deg) brightness(150%) contrast(100%);" src="assets/images/ui/external.svg">
					</a>

					<a class="titlebarBtn flex" style="color: #ECECEC; padding: 5px 10px; text-decoration: none;" title="This will open the browser" target="_blank" href="https://forms.gle/Fwh1TJgYMdW2z7Zi8">
						<img style="height: 14px;" src="assets/images/ui/feedback.svg">
						<span style="font-family: var(--light); font-size: 14px; letter-spacing: 0.5px;">Submit Feedback/Issue</span>
						<img style="height: 12px; filter: invert(61%) sepia(38%) saturate(5928%) hue-rotate(176deg) brightness(150%) contrast(100%);" src="assets/images/ui/external.svg">
					</a>

					<a class="titlebarBtn flex" style="color: #ECECEC; padding: 5px 10px; text-decoration: none;" title="This will open the browser" target="_blank" href="https://forms.gle/Fta9cX536s8HQfU29">
						<img style="height: 14px;" src="assets/images/ui/feedback.svg">
						<span style="font-family: var(--light); font-size: 14px; letter-spacing: 0.5px;">Submit Flash Games</span>
						<img style="height: 12px; filter: invert(61%) sepia(38%) saturate(5928%) hue-rotate(176deg) brightness(150%) contrast(100%);" src="assets/images/ui/external.svg">
					</a>
				</span>

				<p style="color: #B0B0B0; font-family: var(--light); font-size: 10px;">Version: 1.0.0</p>
			</div>
		</div>
	</div>
`;

window.addEventListener('load', () => {
	aboutPopup.innerHTML = aboutHTML;

	aboutPopup.style.display = 'none';

	aboutPopup.addEventListener('click', (e) => {
		if (e.target === aboutPopup) {
			aboutPopup.style.display = 'none';
			aboutBtn.innerHTML = `<img style="height: 10px;" src="assets/images/ui/about.svg"><span style="font-family: var(--light); font-size: 10px; letter-spacing: 0.5px;">About</span>`;
			aboutBtn.style.color = "#ECECEC";
			aboutBtn.style.background = "#424242";
			aboutBtn.style.transition = "0.3s";
		}
	});

	aboutBtn.addEventListener('click', () => {
		if (statsPopup.style.display === 'flex') {
			statsPopup.style.display = 'none';
			statsBtn.innerHTML = `<img style="height: 10px;" src="assets/images/ui/stats.svg"><span style="font-family: var(--light); font-size: 10px; letter-spacing: 0.5px;">Stats</span>`;
			statsBtn.style.color = "#ECECEC";
			statsBtn.style.background = "#424242";
			statsBtn.style.transition = "0.3s";
		}

		if (aboutPopup.style.display === 'flex') {
			aboutPopup.style.display = 'none';
			aboutBtn.innerHTML = `<img style="height: 10px;" src="assets/images/ui/about.svg"><span style="font-family: var(--light); font-size: 10px; letter-spacing: 0.5px;">About</span>`;
			aboutBtn.style.color = "#ECECEC";
			aboutBtn.style.background = "#424242";
			aboutBtn.style.transition = "0.3s";
		} else {
			aboutPopup.style.display = 'flex';
			aboutBtn.innerHTML = `<img style="height: 10px; filter: invert(99%) sepia(7%) saturate(31%) hue-rotate(343deg) brightness(104%) contrast(85%);" src="assets/images/ui/about.svg"><span style="font-family: var(--light); font-size: 10px; letter-spacing: 0.5px;">About</span>`;
			aboutBtn.style.color = "#242424";
			aboutBtn.style.background = "#ECECEC";
			aboutBtn.style.transition = "0.3s";
		}
	});
});
// ======================================================================== ABOUT POPUP END //



// STATS POPUP START ====================================================================== //
const statsPopup = document.getElementById('statsPopup');
const statsBtn = document.getElementById('statsBtn');

var statsHTML = `
	<div class="flex flexCol" style="max-height: calc(100% - 80px); height: auto; min-width: 400px; width: 65%; background: #424242; border-radius: 10px; align-items: center; justify-content: center;">
		<div class="flex flexCol" style="height: calc(100% - 80px); width: calc(100% - 60px); padding: 30px 30px 50px 30px; gap: 10px; background: #242424; border-radius: 10px; overflow: auto;">
			<div class="flex flexCol" style="width: 100%; align-items: center; gap: 50px;">
				<div class="flex" style="height: 65px; width: auto; padding: 40px 0 0 0; align-items: center; justify-content: center; margin-bottom: -40px;">
					<img src="assets/images/logo-text.png" style="height: 100%; width: auto;">
				</div>

				<h1 style="color: #1598E8; font-family: var(--light); font-size: 16px;">Game Statistics</h1>

				<div id="statsContainer" style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 15px; align-items: start; width: 70%;"></div>

				<p style="font-size: 20px; font-family: var(--regular);">
					Total Time Spent: 
					<span id="totalGameTime" style="font-family: var(--light); color: #B0B0B0;"></span>
				</p>

				<span class="flex flexRow" style="align-items: center; gap: 15px;">
					<button class="titlebarBtn flex" style="color: #ECECEC; padding: 5px 10px; border: none;" title="This action is irreversible" onclick="localStorage.clear(); location.reload();">
						<img style="height: 14px;" src="assets/images/ui/delete.svg">
						<span style="font-family: var(--light); font-size: 14px; letter-spacing: 0.5px;">Clear Records</span>
					</button>

					<button class="titlebarBtn flex" style="color: #ECECEC; padding: 5px 10px; border: none;" title="Copy Records to the Clipboard" onclick="copyStatsToClipboard()">
						<img style="height: 14px;" src="assets/images/ui/copy.svg">
						<span style="font-family: var(--light); font-size: 14px; letter-spacing: 0.5px;">Copy Records</span>
					</button>
				</span>
			</div>
		</div>
	</div>
`;


function copyStatsToClipboard() {
	const statsContainer = document.getElementById('statsContainer');
	const statsText = Array.from(statsContainer.children)
		.map(gameItem => {
			const gameName = gameItem.children[0].textContent;
			const gameTime = gameItem.children[1].textContent;
			return `- ${gameName}: ${gameTime}`;
		})
		.join('\n');

	navigator.clipboard.writeText('PixelPlayer Statistics:\n\n' + statsText)
		.then(() => alert('Stats copied to clipboard!'))
		.catch(error => console.error('Error copying stats to clipboard:', error));
};


window.addEventListener('load', () => {
	statsPopup.innerHTML = statsHTML;

	statsPopup.style.display = 'none';

	statsPopup.addEventListener('click', (e) => {
		if (e.target === statsPopup) {
			statsPopup.style.display = 'none';
			statsBtn.innerHTML = `<img style="height: 10px;" src="assets/images/ui/stats.svg"><span style="font-family: var(--light); font-size: 10px; letter-spacing: 0.5px;">Stats</span>`;
			statsBtn.style.color = "#ECECEC";
			statsBtn.style.background = "#424242";
			statsBtn.style.transition = "0.3s";
		}
	});

	statsBtn.addEventListener('click', () => {
		if (aboutPopup.style.display === 'flex') {
			aboutPopup.style.display = 'none';
			aboutBtn.innerHTML = `<img style="height: 10px;" src="assets/images/ui/about.svg"><span style="font-family: var(--light); font-size: 10px; letter-spacing: 0.5px;">About</span>`;
			aboutBtn.style.color = "#ECECEC";
			aboutBtn.style.background = "#424242";
			aboutBtn.style.transition = "0.3s";
		}

		if (statsPopup.style.display === 'flex') {
			statsPopup.style.display = 'none';
			statsBtn.innerHTML = `<img style="height: 10px;" src="assets/images/ui/stats.svg"><span style="font-family: var(--light); font-size: 10px; letter-spacing: 0.5px;">Stats</span>`;
			statsBtn.style.color = "#ECECEC";
			statsBtn.style.background = "#424242";
			statsBtn.style.transition = "0.3s";
		} else {
			statsPopup.style.display = 'flex';
			statsBtn.innerHTML = `<img style="height: 10px; filter: invert(99%) sepia(7%) saturate(31%) hue-rotate(343deg) brightness(104%) contrast(85%);" src="assets/images/ui/stats.svg"><span style="font-family: var(--light); font-size: 10px; letter-spacing: 0.5px;">Stats</span>`;
			statsBtn.style.color = "#242424";
			statsBtn.style.background = "#ECECEC";
			statsBtn.style.transition = "0.3s";
		}
	});
});

window.addEventListener('load', () => {
	displayTotalTimeSpentAcrossAllGames();
});


function displayTotalTimeSpentAcrossAllGames() {
	const totalGameTimeElement = document.getElementById('totalGameTime');
	let aggregatedTotalTime = 0;

	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		if (key.endsWith("_totalTime")) {
			const totalTime = parseInt(localStorage.getItem(key), 10) || 0;
			aggregatedTotalTime += totalTime;
		}
	}

	const totalTimeInSeconds = Math.floor(aggregatedTotalTime / 1000);
	const hours = Math.floor(totalTimeInSeconds / 3600);
	const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);

	totalGameTimeElement.textContent = `${hours}h ${minutes}m`;
}


document.addEventListener('DOMContentLoaded', function () {
	const statsBtn = document.getElementById('statsBtn');
	statsBtn.addEventListener('click', () => {
		statsContainer.innerHTML = '';
		fetch('localgames.json')
			.then(response => response.json())
			.then(games => {
				const statsContainer = document.getElementById('statsContainer');
				games.forEach(game => {
					const totalTimeKey = game.id + "_totalTime";
					const totalTime = parseInt(localStorage.getItem(totalTimeKey), 10) || 0;
					const totalTimeInSeconds = Math.floor(totalTime / 1000);
					const hours = Math.floor(totalTimeInSeconds / 3600);
					const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
					const formattedTime = `${hours}h ${minutes}m`;

					const gameItem = document.createElement('span');
					gameItem.className = 'flex flexRow';
					gameItem.style = 'align-items: center; justify-content: space-between;';
					gameItem.innerHTML = `
						<span style="color: #ECECEC; font-family: var(--regular); font-size: 14px;">${game.name}</span>
						<span style="color: #B0B0B0; font-family: var(--light); font-size: 14px;">${formattedTime}</span>
					`;
					statsContainer.appendChild(gameItem);
				});
			})
			.catch(error => console.error('Error loading the games:', error));
	});
});
// ======================================================================== STATS POPUP END //