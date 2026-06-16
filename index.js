async function getData() {
  try {
    const response = await fetch('https://localhost3000/api/player/random');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const random = await response.json();
    console.log(player["name"]);
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

async function getData() {
  try {
    const response = await fetch('https://localhost3000/api/player/random');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const random = await response.json();
    console.log(response[question]);
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

async function getData() {
  try {
    const response = await fetch('https://localhost3000/api/player/random');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const random = await response.json();
    console.log(player[image]);
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

Name = player["name"]
let elementHTML = document.getElementById("name");
elementHTML.textContent = donnee;

question = response["question"]
let elementHTML = document.getElementById("question");
elementHTML.textContent = donnee;

image = player["image"]
let elementHTML = document.getElementById("image");
elementHTML.textContent = hurl;

if (!joueur)
  return res.status(404).json({"message":"Pas de joueur"}); 

// --- Traitement du formulaire ---
if (request.method == "Post")
  team = request.form.get("team")

// --- Vérifier que les données sont bonnes ---
if (joueur["team"] != team)
  return res.status(404).json({"message":"Wrong Team"});
else
  return res.status(200).json({"message":"Bonne réponse"})