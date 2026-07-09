function showAnswer(response) {
	message.innerHTML = "<br>";
	new Typewriter("#joke", {
    strings: response.data.answer,
		autoStart: true,
		cursor: null,
		delay: 25,
	});
  console.log(response.data.answer);
}

function getResponse() {
	let apiKey = "9f1739f0t2608f809957ea4ea4ob5f0b";
	let context =
		"You are a professional jokester, give different jokes and give the answer in a format as follow: Why did the French chef quit his job? <br> He couldn't find thyme!";
	let prompt = "Tell me a joke";
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let message = document.querySelector("#message");
	message.innerHTML = "Generating a joke for you....Please wait";
	joke.innerHTML = "<br>";
  console.log("Called the AI API");
	axios.get(apiUrl).then(showAnswer);
}

let jokeButton = document.querySelector("#joke-button");
jokeButton.addEventListener("click", getResponse);
