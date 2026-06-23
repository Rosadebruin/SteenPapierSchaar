const humanOutput = document.querySelector("#human");
const computerOutput = document.querySelector("#computer");
const resultOutput = document.querySelector("#result");



// selecteerd alle knoppen in 1 keer
const knoppen = document.querySelectorAll("#steen, #papier, #schaar");

let humanChoice = "";
let computerChoice = "";





// teksten result
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";
computerOutput.innerHTML = "De keuze van de computer komt hier!";
resultOutput.innerHTML = "result";

function speelSpel(event) {
  // Logt het event
  console.log("Klik event triggered: ", event);

  // zorgt ervoor dat mijn keuze wordt bewaard
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;

  // zorgt voor de geluidjes bij de keuze
if (humanChoice === 'papier') {
    const audio = new Audio('paper.m4a'); 
    audio.play();
}
if (humanChoice === 'schaar') {
    const audio = new Audio('scissor.m4a'); 
    audio.play();
}
if (humanChoice === 'steen') {
    const audio = new Audio('rock.m4a'); 
    audio.play();
}

  // genereert de keuze van de computer
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      computerChoice = 'steen';
      break;
    case 2:
      computerChoice = 'schaar';
      break;
    case 3:
      computerChoice = 'papier';
      break;
  }
  
  // Toont de keuze van de computer
  computerOutput.innerHTML = computerChoice;

 // bepaalt de winnaar (gelijkspel)
  if (humanChoice === computerChoice) {
    resultOutput.innerHTML = "Gelijkspel!";
  } 
  // Alle keuzes wanneer ik win
  else if (
    (humanChoice === 'steen' && computerChoice === 'schaar') ||
    (humanChoice === 'papier' && computerChoice === 'steen') ||
    (humanChoice === 'schaar' && computerChoice === 'papier')
  ) {
    resultOutput.innerHTML = "Goedzo, jij hebt gewonnen! 🎉";
  } 
  // Als de computer wint
  else {
    resultOutput.innerHTML = "Helaas, de computer heeft gewonnen! 🤖";
  }
}


// Loopt door alle knoppen heen en koppelt dezelfde functie eraan vast
knoppen.forEach(knop => {
  knop.addEventListener('click', speelSpel);
});