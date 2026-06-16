let playerCp;

async function getData() {
  let player = {}
  try {
    const response = await fetch('http://127.0.0.1:3000/api/player/random');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    player = await response.json();




  } catch (error) {
    console.error('Fetch failed:', error);
  }
  const Name = player["name"];
  let nameHtml = document.getElementById("name");
  nameHtml.textContent = Name;


  playerCp = player
  const question = player["question"];
  let questionHtml = document.getElementById("question");
  questionHtml.textContent = question;

  const image = player["image"];
  let imageHtml = document.getElementById("image");
  imageHtml.src = image;

  const solutions = document.getElementById("solutions");

  // On supprime les anciennes options
  solutions.innerHTML = "";

  // On ajoute les nouvelles
  player.possibles.forEach(possible => {
      const option = document.createElement("option");

      option.value = possible;
      option.textContent = possible;

      solutions.appendChild(option);
  });

}



document.getElementById("guess-form").addEventListener("submit", function (event) {
    // Empêche le rechargement de la page
    event.preventDefault();

    const answer = document.getElementById("solutions").value;


    verifierReponse(answer);
});

async function verifierReponse(answer) {

    try {
        const response = await fetch(
            'http://127.0.0.1:3000/api/player/check',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    playerId: playerCp.id,
                    question: playerCp.question,
                    answer: answer
                }),
            }
        );
        const resultHtml = document.getElementById("result");
        const result = await response.json();
        if (result.correct) {
          resultHtml.textContent = "Bonne réponse ! ";
          resultHtml.style.color = "green";
        } else {
          resultHtml.textContent = `Mauvaise réponse (La bonne réponse était : ${result.expected})`;
          resultHtml.style.color = "red";
        }

    } catch (error) {
        console.error(error);
    }
}

getData();


