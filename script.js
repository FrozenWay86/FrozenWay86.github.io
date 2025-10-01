// Récupération des données sauvegardées
let points = parseInt(localStorage.getItem("points")) || 0;
let clicValue = parseInt(localStorage.getItem("clicValue")) || 1;
let autoClickValue = parseInt(localStorage.getItem("autoClick")) || 0;
let clickUpgrade = parseInt(localStorage.getItem("clickUpgrade")) || 0;
let autoClickUpgrades = parseInt(localStorage.getItem("autoClickUpgrades")) || 0;

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

// Upgrade clic f(x)=(1.5^1.00001*(x/8+1))*5
upgradeBtn.addEventListener("click", () => {
    if(points >= upgradeCost){
        points -= upgradeCost;
        clickUpgrade += 1;
        clicValue = (1.5 ** (1.0001*((clickUpgrade/8)+1)))*5;

        // Augmenter le prix g(x)=(1.1^1.00001*x/8)*5
        upgradeCost = Math.round((1.1 * (10 ** (1.00001*clickUpgrade/8)))*5);

        localStorage.setItem("clicValue", clicValue);
        localStorage.setItem("upgradeCost", upgradeCost);
        localStorage.setItem("clickUpgrade", clickUpgrade);

        upgradeBtn.innerText = `Upgrade - ${upgradeCost} pts`;
        updateGame();
    }
}); 

// Upgrade auto-click
autoBtn.addEventListener("click", () => {
    if(points >= autoCost){
        points -= autoCost;
        autoClickUpgrades += 1;

        //Valeur de l'autoclick (= a la valeur d'un click)
        autoClickValue = autoClickUpgrades*((1.5 ** (1.0001*((clickUpgrade/8)+1))));

        // Augmenter le prix (5 fois plus vite que clic)
        autoCost = Math.round(((1.1 * (10 ** (1.00001*autoClickUpgrades/8)))*5)*5);

        localStorage.setItem("autoClick", autoClickValue);
        localStorage.setItem("autoCost", autoCost);
        localStorage.setItem("autoClickUpgrades", autoClickUpgrades);

        autoBtn.innerText = `Auto-click - ${autoCost} pts`;
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
    clickUpgrade += 1    // bonus clic
    clicValue = (1.5 ** (1.0001*((clickUpgrade/8)+1)))*5;
    localStorage.setItem("clicValue", clicValue);
    localStorage.setItem("clickUpgrade", clickUpgrade);
}

// Met à jour l'affichage et barre de progression
function updateGame(){
    scoreEl.innerText = Math.round(points);
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
