function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "9f1739f0t2608f809957ea4ea4ob5f0b";
let context = "You are an AI Assistant with all knowledge about evrything in the world, make sure you give precise and very short answer";
let prompt = "Who was the first female president?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer)