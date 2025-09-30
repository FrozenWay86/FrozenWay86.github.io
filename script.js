// Récupération des données sauvegardées
let points = parseInt(localStorage.getItem("points")) || 0;
let clicValue = parseInt(localStorage.getItem("clicValue")) || 1;
let autoClickValue = parseInt(localStorage.getItem("autoClick")) || 0;

// Tarifs de base
let upgradeCost = parseInt(localStorage.getitem("upgradeCost")) || 10;
let autoCost = parseInt(localStorage.getitem("autoCost")) || 50;

const scoreEl = document.getElementById("score");
const clickImg = document.getElementById("clickImg");
const upgradeBtn = document.getElementById("upgradeBtn");
const autoBtn = document.getElementById("autoBtn");
const progress = document.getElementById("progress");

// Initialisation des boutons 
upgradeBtn.innerText = `Upgrade (+1/clic) - ${upgradeCost} pts`;
autoBtn.innerText = `Auto-click (+1/sec) - ${autoCost} pts`;

scoreEl.innerText = points;

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

        // Augmenter le prix (par exemple ×2)
        upgradeCost = Math.floor(upgradeCost * 2);

        localStorage.setItem("clicValue", clicValue);
        localStorage.setItem("upgradeCost", upgradeCost);

        // Mettre à jour le texte du bouton
        upgradeBtn.innerText = `Upgrade (+1/clic) - ${upgradeCost} pts`;

        updateGame();
    }
});

// Upgrade auto-click
autoBtn.addEventListener("click", () => {
    if(points >= autoCost){
        points -= autoCost;
        autoClickValue += 1;

        // Augmenter le prix (×2)
        autoCost = Math.floor(autoCost * 2);

        localStorage.setItem("autoClick", autoClickValue);
        localStorage.setItem("autoCost", autoCost);

        // Mettre à jour le texte du bouton
        autoBtn.innerText = `Auto-click (+1/sec) - ${autoCost} pts`;

        updateGame();
    }
});

// Auto-click toutes les secondes
setInterval(() => {
    points += autoClickValue;
    updateGame();
}, 1000);

// Met à jour l'affichage et sauvegarde
function updateGame(){
    scoreEl.innerText = points;
    localStorage.setItem("points", points);
    progress.style.width = (points % 100) + "%";
}
