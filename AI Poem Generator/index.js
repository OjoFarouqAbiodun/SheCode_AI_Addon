function showPoem(response) {
  new Typewriter("#poem", {
		strings: response.data.answer,
		autoStart: true,
		delay: 2,
		cursor: "",
	});
} 

function getInput() {
  let instructionsElement = document.querySelector("#instructions");
	let apiKey = "9f1739f0t2608f809957ea4ea4ob5f0b"
  let context = "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a French poem about ${instructionsElement.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let poemElement = document.querySelector("#poem");
	poemElement.classList.remove("hidden");
	poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionsElement.value}</div>`;

  axios.get(apiUrl).then(showPoem)
}

function generatePoem(event) {
	event.preventDefault();
	let submitButton = document.querySelector("#submit-button");
	submitButton.addEventListener("click", getInput);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
