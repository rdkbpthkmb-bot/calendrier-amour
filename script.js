const debut = new Date("2025-09-23");

const aujourdhui = new Date();

const difference = aujourdhui - debut;

const jours = Math.floor(
difference / (1000 * 60 * 60 * 24)
);

document.getElementById("compteur").innerHTML =
`❤️ Ensemble depuis ${jours} jours ❤️`;

function ouvrirVoyage(){

document.querySelector(".accueil").style.display = "none";

document.getElementById("voyage").style.display = "block";

}

function ouvrirJour1(){

document.getElementById("jour1").style.display = "block";



}
