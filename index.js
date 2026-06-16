const player = {}

getData()

async function getData() {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/player/random');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    //const random = await response.json();
    console.log(reponse)

  } catch (error) {
    console.error('Fetch failed:', error);
  }
}


Name = player["name"]
let nameHtml = document.getElementById("name");
nameHtml.textContent = Name;



question = response["question"]
let questionHtml = document.getElementById("question");
questionHtml.textContent = question;

image = player["image"]
let imageHtml = document.getElementById("image");
imageHtml.textContent = image;

//if (!joueur)
//  return res.status(404).json({"message":"Pas de joueur"}); 

// --- Traitement du formulaire ---
//if (request.method == "Post")
//  team = request.form.get("team")

// --- Vérifier que les données sont bonnes ---
//if (joueur["team"] != team)
//  return res.status(404).json({"message":"Wrong Team"});
//else
//  return res.status(200).json({"message":"Bonne réponse"})