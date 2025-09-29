// Récupération des données sauvegardées
let points = parseInt(localStorage.getItem("points")) || 0;
let clicValue = parseInt(localStorage.getItem("clicValue")) || 1;
let autoClickValue = parseInt(localStorage.getItem("autoClick")) || 0;

const scoreEl = document.getElementById("score");
const clickImg = document.getElementById("clickImg");
const upgradeBtn = document.getElementById("upgradeBtn");
const autoBtn = document.getElementById("autoBtn");
const progress = document.getElementById("progress");

scoreEl.innerText = points;

// Fonction clic
clickImg.addEventListener("click", () => {
    points += clicValue;
    updateGame();
});

// Upgrade clic
upgradeBtn.addEventListener("click", () => {
    if(points >= 10){
        points -= 10;
        clicValue += 1;
        localStorage.setItem("clicValue", clicValue);
        updateGame();
    }
});

// Upgrade auto-click
autoBtn.addEventListener("click", () => {
    if(points >= 50){
        points -= 50;
        autoClickValue += 1;
        localStorage.setItem("autoClick", autoClickValue);
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
