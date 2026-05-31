function ouvrirLivre() {
    document.getElementById("couverture").style.display = "none";
    document.getElementById("livre").style.display = "block";
}

let petaleActuel = 1;

const cadeaux = [
"👑 Journée Reine",
"✨ Activité Exceptionnelle",
"💌 100 Preuves d'Amour",
"❤️ Je réalise l'une de tes envies",
"📸 Séance photo",
"🌅 Balade romantique",
"🛍️ Shopping avec budget défini",
"👸 Journée Princesse",
"🏝️ Week-end en amoureux ailleurs",
"🥐 Brunch au lit ou restaurant",
"💌 Lettre manuscrite",
"🛋️ Journée sans rien faire",
"🎁 Sortie surprise",
"🎲 Soirée jeux à deux",
"🌇 Coucher de soleil ensemble",
"💆 Massage 45 minutes",
"🍽️ Restaurant gastronomique",
"☀️ Une journée comme en août",
"🧺 Pique-nique romantique"
];

let cadeauxDisponibles =
JSON.parse(localStorage.getItem("cadeauxDisponibles"))
|| [...cadeaux];

function tournerRoue(numero){

    if(localStorage.getItem("petale"+numero)){
        return;
    }

    let index =
    Math.floor(Math.random()*cadeauxDisponibles.length);

    let cadeau =
    cadeauxDisponibles[index];

    cadeauxDisponibles.splice(index,1);

    localStorage.setItem(
        "cadeauxDisponibles",
        JSON.stringify(cadeauxDisponibles)
    );

    let zone =
    document.getElementById("cadeau"+numero);

    zone.style.display="block";
    zone.innerHTML =
    "🎁 Félicitations !<br><br>"+cadeau;

    localStorage.setItem(
        "petale"+numero,
        cadeau
    );

    mettreAJourProgression();

    setTimeout(() => {
        suivant();
    }, 3000);
}

function suivant(){

    let actuel =
    document.getElementById(
        "petale"+petaleActuel
    );

    if(actuel){
        actuel.classList.remove("actif");
    }

    petaleActuel++;

    let suivant =
    document.getElementById(
        "petale"+petaleActuel
    );

    if(suivant){
        suivant.classList.add("actif");
    }

    mettreAJourProgression();
}

function mettreAJourProgression(){

    let pourcentage =
    (petaleActuel / 22) * 100;

    document.getElementById("barre")
    .style.width =
    pourcentage + "%";
}

window.onload = () => {

    for(let i=1;i<=22;i++){

        let cadeau =
        localStorage.getItem("petale"+i);

        if(cadeau){

            let zone =
            document.getElementById(
                "cadeau"+i
            );

            if(zone){

                zone.style.display="block";

                zone.innerHTML =
                "🎁 Déjà obtenu<br><br>"+cadeau;

                petaleActuel = i+1;
            }
        }
    }

    let actif =
    document.getElementById(
        "petale"+petaleActuel
    );

    if(actif){
        actif.classList.add("actif");
    }

    mettreAJourProgression();
}