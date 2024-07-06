const gameSearchform = document.getElementById('gameSearchform');
const gameSearchInput = document.getElementById('gameSearchInput');
const gameSearchBtn = document.getElementById('gameSearchBtn');
const gameSearchIcon = document.getElementById('gameSearchIcon');

const gameCardsContainer = document.getElementById('gameCardsContainer');

fetch('localgames.json')
	.then(response => response.json())
	.then(data => {
		const libraryGamesCount = document.getElementById('libraryGamesCount');
		libraryGamesCount.textContent = `- ${data.length} Games Found`;

		gameCardsContainer.innerHTML = data.map(game => `
			<div class="gameCard flex flexCol" style="height: auto; width: 100%; min-width: 150px; background: #424242; align-items: start; border-radius: 10px;">
				<div style="height: 250px; width: 100%;">
					<img class="gameIcon" src="${game.image}" style="height: 100%; width: 100%; object-fit: cover; border-radius: 10px 10px 0 0;" alt="Game Image">
				</div>
				<div class="flex flexCol" style="width: calc(100% - 40px); padding: 20px; align-items: start; justify-content: center; gap: 10px;">
					<h1 style="font-size: 16px; width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${game.name}">${game.name}</h1>
					<a href="player.html#${game.id}" class="flex flexRow" style="padding: 6px 12px; font-size: 12px; text-decoration: none; text-transform: uppercase; color: #ECECEC; background: #1598E8; align-items: center; border-radius: 5px; gap: 5px;">
						<img src="assets/images/ui/play.svg" style="height: 10px;"> Play
					</a>
				</div>
			</div>
		`).join('');
	})
	.catch(error => {
		console.error(error);
	});


gameSearchform.addEventListener('submit', e => {
	e.preventDefault();
});

gameSearchInput.addEventListener('input', () => {
	if (gameSearchInput.value.length > 0) {
		gameSearchIcon.style.filter = 'invert(67%) sepia(0%) saturate(1281%) hue-rotate(151deg) brightness(200%) contrast(91%)';
		gameSearchBtn.style.cursor = 'pointer';

		const searchQuery = gameSearchInput.value.toLowerCase();
		console.log(searchQuery);

		const gameCardsContainer = document.getElementById('gameCardsContainer');
		gameCardsContainer.innerHTML = '';

		fetch ('localgames.json')
			.then(response => response.json())
			.then(data => {
				const searchResults = data.filter(game => game.name.toLowerCase().includes(searchQuery));
				console.log(searchResults);

				if (searchResults.length === 0) {
					gameCardsContainer.innerHTML = `
						<div class="flex flexCol" style="height: 100%; width: 100%; align-items: center; justify-content: center; gap: 30px;">
							<img src="assets/images/ui/ghost.svg" style="height: 200px; filter: invert(61%) sepia(38%) saturate(5928%) hue-rotate(176deg) brightness(91%) contrast(100%);">
							<p class="flex flexCol" style="width: 100%; font-size: 18px; text-transform: uppercase; font-family: var(--light); color: #B0B0B0; align-items: center;">
								No Results Found For
								<span style="color: #1598E8; font-family: var(--boldItalic); font-size: 30px;">"${searchQuery}"</span>
							</p>
						</div>
					`;
				} else {
					gameCardsContainer.innerHTML = searchResults.map(game => `
						<div class="gameCard flex flexCol" style="height: auto; width: 15%; min-width: 150px; background: #424242; align-items: start; border-radius: 10px;">
							<div style="height: 250px; width: 100%;">
								<img class="gameIcon" src="${game.image}" style="height: 100%; width: 100%; object-fit: cover; border-radius: 10px 10px 0 0;" alt="Game Image">
							</div>
							<div class="flex flexCol" style="width: calc(100% - 40px); padding: 20px; align-items: start; justify-content: center; gap: 10px;">
								<h1 style="font-size: 16px; width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${game.name}">${game.name}</h1>
								<a href="player.html#${game.id}" class="flex flexRow" style="padding: 6px 12px; font-size: 12px; text-decoration: none; text-transform: uppercase; color: #ECECEC; background: #1598E8; align-items: center; border-radius: 5px; gap: 5px;">
									<img src="assets/images/ui/play.svg" style="height: 10px;"> Play
								</a>
							</div>
						</div>
					`).join('');
				}
			})
			.catch(error => {
				console.error(error);
			});
	} else {
		gameSearchIcon.style.filter = 'invert(67%) sepia(0%) saturate(1281%) hue-rotate(151deg) brightness(130%) contrast(91%)';
		gameSearchBtn.style.cursor = 'not-allowed';

		fetch('localgames.json')
			.then(response => response.json())
			.then(data => {
				gameCardsContainer.innerHTML = data.map(game => `
					<div class="gameCard flex flexCol" style="height: auto; width: 15%; min-width: 150px; background: #424242; align-items: start; border-radius: 10px;">
						<div style="height: 250px; width: 100%;">
							<img class="gameIcon" src="${game.image}" style="height: 100%; width: 100%; object-fit: cover; border-radius: 10px 10px 0 0;" alt="Game Image">
						</div>
						<div class="flex flexCol" style="width: calc(100% - 40px); padding: 20px; align-items: start; justify-content: center; gap: 10px;">
							<h1 style="font-size: 16px; width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${game.name}">${game.name}</h1>
							<a href="player.html#${game.id}" class="flex flexRow" style="padding: 6px 12px; font-size: 12px; text-decoration: none; text-transform: uppercase; color: #ECECEC; background: #1598E8; align-items: center; border-radius: 5px; gap: 5px;">
								<img src="assets/images/ui/play.svg" style="height: 10px;"> Play
							</a>
						</div>
					</div>
				`).join('');
			})
			.catch(error => {
				console.error(error);
			});
	}
});