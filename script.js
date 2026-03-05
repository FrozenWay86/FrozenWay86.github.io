document.addEventListener("DOMContentLoaded", function () {

const drivers = [
"Max Verstappen",
"Isack Hadjar",
"Charles Leclerc",
"Lewis Hamilton",
"Fernando Alonso",
"Lance Stroll",
"Pierre Gasly",  
"Franco Colapinto",  
"Lando Norris",
"Oscar Piastri",
"George Russell",
"Kimi Antonelli",
"Esteban Ocon",
"Oliver Bearman", 
"Nico Hülkenberg",
"Gabriel Bortoleto",
"Liam Lawson",
"Arvid Lindblad",
"Carlos Sainz",
"Alexander Albon",
"Valtteri Bottas",
"Sergio Perez"
]

function populateDrivers(){

const selects = ["pole","p1","p2","p3","fastest"]

selects.forEach(id => {

const select = document.getElementById(id)

let defaultOption = document.createElement("option")
defaultOption.textContent = "-- choisir un pilote --"
defaultOption.value = ""
select.appendChild(defaultOption)

drivers.forEach(driver => {

let option = document.createElement("option")
option.value = driver
option.textContent = driver

select.appendChild(option)

})

})

}

function preventDuplicatePodium(){

const podiumSelects = ["p1","p2","p3"].map(id => document.getElementById(id))

podiumSelects.forEach(select => {

select.addEventListener("change", () => {

const selectedValues = podiumSelects.map(s => s.value)

podiumSelects.forEach(s => {
Array.from(s.options).forEach(option => option.disabled = false)
})

podiumSelects.forEach(s => {

selectedValues.forEach(value => {

if(value !== "" && s.value !== value){

let option = Array.from(s.options).find(o => o.value === value)

if(option) option.disabled = true

}

})

})

})

})

}

populateDrivers()
preventDuplicatePodium()

})
