function getGameIdFromUrl() {
	return window.location.hash.substring(1);
}

function startGame() {
	const gameId = getGameIdFromUrl();
	const startTime = new Date().getTime();
	localStorage.setItem(gameId + "_startTime", startTime.toString());
}

function endGame() {
	const gameId = getGameIdFromUrl();
	const endTime = new Date().getTime();
	const startTimeKey = gameId + "_startTime";
	const startTime = parseInt(localStorage.getItem(startTimeKey), 10);
	if (!startTime) {
		return;
	}
	const timeSpent = endTime - startTime;
	updateTotalTime(gameId, timeSpent);
}

function updateTotalTime(gameId, timeSpent) {
	const totalTimeKey = gameId + "_totalTime";
	const previousTotalTime = parseInt(localStorage.getItem(totalTimeKey), 10) || 0;
	const newTotalTime = previousTotalTime + timeSpent;
	localStorage.setItem(totalTimeKey, newTotalTime.toString());
}


window.onload = startGame;

window.onbeforeunload = endGame;

window.onload = function () {
	const gameId = getGameIdFromUrl();
	startGame();
};