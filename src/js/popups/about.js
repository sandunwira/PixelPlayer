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