document.getElementById("predictionForm").addEventListener("submit", function(e){

e.preventDefault()

const prediction = {
player: document.getElementById("player").value,
pole: document.getElementById("pole").value,
p1: document.getElementById("p1").value,
p2: document.getElementById("p2").value,
p3: document.getElementById("p3").value,
fastest: document.getElementById("fastest").value
}

let predictions = JSON.parse(localStorage.getItem("predictions")) || []

predictions.push(prediction)

localStorage.setItem("predictions", JSON.stringify(predictions))

alert("Pronostic enregistré !")

})
