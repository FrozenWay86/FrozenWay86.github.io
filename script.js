// Récupération des données sauvegardées
let points = parseInt(localStorage.getItem("points")) || 0;
let clicValue = parseInt(localStorage.getItem("clicValue")) || 1;
let autoClickValue = parseInt(localStorage.getItem("autoClick")) || 0;

// Tarifs de base
let upgradeCost = parseInt(localStorage.getItem("upgradeCost")) || 10;
let autoCost = parseInt(localStorage.getItem("autoCost")) || 50;

const scoreEl = document.getElementById("score");
const clickImg = document.getElementById("clickImg");
const upgradeBtn = document.getElementById("upgradeBtn");
const autoBtn = document.getElementById("autoBtn");
const progress = document.getElementById("progress");

// Initialisation des boutons
upgradeBtn.innerText = `Upgrade (+1/clic) - ${upgradeCost} pts`;
autoBtn.innerText = `Auto-click (+1/sec) - ${autoCost} pts`;
scoreEl.innerText = points;

// Variable pour suivre la dernière barre complète
let lastProgressMilestone = Math.floor(points / 100);

// Fonction clic
clickImg.addEventListener("click", () => {
    points += clicValue;
    updateGame();
});

// Upgrade clic
upgradeBtn.addEventListener("click", () => {
    if(points >= upgradeCost){
        points -= upgradeCost;
        clicValue += 1;

        // Augmenter le prix ×1.1
        upgradeCost = Math.round(upgradeCost * 1.1);

        localStorage.setItem("clicValue", clicValue);
        localStorage.setItem("upgradeCost", upgradeCost);

        upgradeBtn.innerText = `Upgrade (+1/clic) - ${upgradeCost} pts`;
        updateGame();
    }
});

// Upgrade auto-click
autoBtn.addEventListener("click", () => {
    if(points >= autoCost){
        points -= autoCost;
        autoClickValue += 1;

        // Augmenter le prix ×1.5
        autoCost = Math.round(autoCost * 1.5);

        localStorage.setItem("autoClick", autoClickValue);
        localStorage.setItem("autoCost", autoCost);

        autoBtn.innerText = `Auto-click (+1/sec) - ${autoCost} pts`;
        updateGame();
    }
});

// Auto-click toutes les secondes
setInterval(() => {
    points += autoClickValue;
    updateGame();
}, 1000);

// Bonus hors barre
function giveBonus(){
    points += 50;      // bonus points
    clicValue += 1;    // bonus clic
    localStorage.setItem("points", points);
    localStorage.setItem("clicValue", clicValue);
}

// Met à jour l'affichage et barre de progression
function updateGame(){
    scoreEl.innerText = points;
    localStorage.setItem("points", points);

    // Calcul de la barre de progression
    let progressPercent = points % 100;
    progress.style.width = progressPercent + "%";

    // Bonus hors barre : vérifier si on vient de franchir un multiple de 100
    let currentMilestone = Math.floor(points / 100);
    if(currentMilestone > lastProgressMilestone){
        giveBonus();
        lastProgressMilestone = currentMilestone;
    }
}
