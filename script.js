const humanOutput = document.querySelector("#human");
const computerOutput = document.querySelector("#computer");
const resultOutput = document.querySelector("#result");
const steenBtn = document.querySelector("#steen");
const papierBtn = document.querySelector("#papier");
const schaarBtn = document.querySelector("#schaar");

let humanChoice = "";
let computerChoice = "";

/*Dit zorgt ervoor dat jouwn keuze als speler wordt bewaard*/

steenBtn.addEventListener('click', function (event) {
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = 'steen';
  }
  if (randomNumber === 2) {
    computerChoice = 'schaar';
  }
  if (randomNumber === 3) {
    computerChoice = 'papier';
  }
  computerOutput.innerHTML = computerChoice;
});


papierBtn.addEventListener('click', function (event) {
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = 'steen';
  }
  if (randomNumber === 2) {
    computerChoice = 'schaar';
  }
  if (randomNumber === 3) {
    computerChoice = 'papier';
  }
  computerOutput.innerHTML = computerChoice;
});

schaarBtn.addEventListener('click', function (event) {
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = 'steen';
  }
  if (randomNumber === 2) {
    computerChoice = 'schaar';
  }
  if (randomNumber === 3) {
    computerChoice = 'papier';
  }
  computerOutput.innerHTML = computerChoice;
});

/*Dit verandert de HTML binnen het element. Dus de tekst die er zal komen te staan.*/

humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";

computerOutput.innerHTML = "De keuze van de computer komt hier!";

resultOutput.innerHTML = "result";


/*Deze code zorgt ervoor dat er een melding wordt getriggered*/


steenBtn.addEventListener("click", function (event) {
  console.log("Klik event triggered: ", event);


});


papierBtn.addEventListener("click", function (event) {
  console.log("Klik event triggered: ", event);


});


schaarBtn.addEventListener("click", function (event) {
  console.log("Klik event triggered: ", event);


});