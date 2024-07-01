// FETCH AND DISPLAY LOCAL GAMES IN THE HOME PAGE START ===================================================== //
const gameCardsContainer = document.getElementById('gameCardsContainer');

fetch('localgames.json')
	.then(response => response.json())
	.then(data => {
		gameCardsContainer.innerHTML = data.map(game => `
			<div class="gameCard flex flexCol" style="height: auto; width: 15%; min-width: 150px; background: #424242; align-items: start; border-radius: 10px;">
				<div style="height: 250px; width: 100%;">
					<img class="gameIcon" src="${game.image}" style="height: 100%; width: 100%; object-fit: cover; border-radius: 10px 10px 0 0;" alt="Game Image">
				</div>
				<div class="flex flexCol" style="width: calc(100% - 40px); padding: 20px; align-items: start; justify-content: center; gap: 10px;">
					<h1 style="font-size: 16px;">${game.name}</h1>
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
// ======================================================= FETCH AND DISPLAY LOCAL GAMES IN THE HOME PAGE END //