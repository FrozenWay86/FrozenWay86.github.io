document.addEventListener("DOMContentLoaded", function () {

const drivers = [
"Max Verstappen",
"Lando Norris",
"Charles Leclerc",
"Carlos Sainz",
"Lewis Hamilton",
"George Russell",
"Fernando Alonso",
"Lance Stroll",
"Pierre Gasly",
"Esteban Ocon",
"Yuki Tsunoda",
"Daniel Ricciardo",
"Alexander Albon",
"Logan Sargeant",
"Valtteri Bottas",
"Zhou Guanyu",
"Kevin Magnussen",
"Nico Hulkenberg"
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
