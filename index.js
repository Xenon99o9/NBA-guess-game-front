async function getData() {
  try {
    const response = await fetch('https://localhost3000/api/player/random');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const random.name = await response.json();
    console.log(random.name);
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

async function getData() {
  try {
    const response = await fetch('https://localhost3000/api/player/random');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const random.team = await response.json();
    console.log(random.team);
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

async function getData() {
  try {
    const response = await fetch('https://localhost3000/api/player/random');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const random.question = await response.json();
    console.log(random.question);
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

async function getData() {
  try {
    const response = await fetch('https://localhost3000/api/player/random');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const random.image = await response.json();
    console.log(random.image);
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

Name = random.name
team = random.team
question = random.question
image = random.iamge

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