const planetLists = document.querySelectorAll(".planet-list-item");
const crewLists = document.querySelectorAll(".crew-list-item");
const technologyLists = document.querySelectorAll(".technology-list-item");
// const planetName = document.querySelector(".planet-name");
// const planetParagraph = document.querySelector(".planet-paragraph");
// const planetValueDistance = document.querySelector(".value-distance");
// const planetValueDay = document.querySelector(".value-day");


import { Request } from "./request";
import { UI } from "./ui";

const request = new Request("data.json");
const ui = new UI();

addEventListeners();

function addEventListeners() {
    planetLists.forEach((planet, key) => {
        planet.addEventListener("click", (event) => {
            changePlanetInfo(key);
            changePlatenSelectedItem(event.target);
        });
    });

    crewLists.forEach((crew, key) => {
        crew.addEventListener("click", (event) => {
            changeCrewInfo(key);
            changeCrewSelectedItem(event.target);
        });
    });

    technologyLists.forEach((technology, key) => {
        technology.addEventListener("click", (event) => {
            changeTechnologyInfo(key);
            changeTechnologySelectedItem(event.target);
        });
    });
}

function changePlanetInfo(key) {
    request.get()
        .then(response => {
            ui.addPlanetInfoToUI(response, key);

        })
        .catch(err => console.log(err));
}
function changeCrewInfo(key) {
    request.get()
        .then(response => {
            ui.addCrewInfoToUI(response, key);
        })
        .catch(err => console.log(err));
}

function changeTechnologyInfo(key) {
    request.get()
        .then(response => {
            ui.addTechnologyInfoToUI(response, key);
        })
        .catch(err => console.log(err));
}

function changePlatenSelectedItem(target) {
    ui.changePlanetButtonState(target);
}

function changeCrewSelectedItem(target) {
    ui.changeCrewButtonState(target);
}

function changeTechnologySelectedItem(target) {
    ui.changeTechnologyButtonState(target);
}