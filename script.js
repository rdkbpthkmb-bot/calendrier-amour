const debut = new Date("2024-09-23");

const aujourdhui = new Date();

const difference = aujourdhui - debut;

const jours = Math.floor(
difference / (1000 * 60 * 60 * 24)
);

document.getElementById("compteur").innerHTML =
`❤️ Ensemble depuis ${jours} jours ❤️`;
