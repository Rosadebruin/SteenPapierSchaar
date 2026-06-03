const humanOutput = document.querySelector("#human");
const computerOutput = document.querySelector("#computer");
const resultOutput = document.querySelector("#result");
const steenBtn = document.querySelector("#steen");
const papierBtn = document.querySelector("#papier");
const schaarBtn = document.querySelector("#schaar");

let humanChoice ="";

/*Dit zorgt ervoor dat de buttons linken aan wat je kiest*/

steenBtn.addEventListener('click', function(event) {
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;
});

papierBtn.addEventListener('click', function(event) {
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;
});

schaarBtn.addEventListener('click', function(event) {
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;
});

/*Dit verandert de HTML binnen het element. Dus de tekst die er zal komen te staan.*/

humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";

computerOutput.innerHTML = "cp choice";

resultOutput.innerHTML = "result";


/*Deze code zorgt ervoor dat er een melding wordt getriggered*/


steenBtn.addEventListener("click", function (event) {
  console.log("Klik event triggered: ", event);
  alert("Klik event triggered");

});


papierBtn.addEventListener("click", function (event) {
  console.log("Klik event triggered: ", event);
  alert("Klik event triggered");

});


schaarBtn.addEventListener("click", function (event) {
  console.log("Klik event triggered: ", event);
  alert("Klik event triggered");

});