function getInput() {
	let instructionsElement = document.querySelector("#instructions");
	let poemElement = document.querySelector("#poem");

	new Typewriter("#poem", {
		strings: `La tombe dit à la rose <br/>
    Des pleurs dont l'aube t'arrose`,
		autoStart: true,
		delay: 2,
		cursor: "",
	});
}

function generatePoem(event) {
	event.preventDefault();
	let submitButton = document.querySelector("#submit-button");
	submitButton.addEventListener("click", getInput);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
