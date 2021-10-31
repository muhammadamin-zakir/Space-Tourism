export class UI {
    constructor() {

        // destination
        this.planetName = document.querySelector(".planet-name");
        this.planetParagraph = document.querySelector(".planet-paragraph");
        this.planetValueDistance = document.querySelector(".value-distance");
        this.planetValueDay = document.querySelector(".value-day");
        this.planetImage = document.querySelector(".planet");

        // crew
        this.crewRole = document.querySelector(".crew-role");
        this.crewName = document.querySelector(".crew-name");
        this.crewParagraph = document.querySelector(".crew-paragraph");
        this.crewImage = document.querySelector(".crew");

        // technology
        this.technologyName = document.querySelector(".technology-name")
        this.technologyParagraph = document.querySelector(".technology-paragraph")
        this.technologyImage = document.querySelector(".technology-image");

        // navbar items
        this.navbarItem = document.querySelector(".menu-ul");
    }

    addPlanetInfoToUI(response, key) {
        // destination
        // console.log(response.destinations[key].name);
        this.planetName.innerHTML = response.destinations[key].name;
        this.planetParagraph.innerHTML = response.destinations[key].description;
        this.planetValueDistance.innerHTML = response.destinations[key].distance;
        this.planetValueDay.innerHTML = response.destinations[key].travel;
        this.planetImage.style.backgroundImage = `url(${response.destinations[key].images.png})`;
    }

    addCrewInfoToUI(response, key) {
        // crew
        this.crewRole.innerHTML = response.crew[key].role;
        this.crewName.innerHTML = response.crew[key].name;
        this.crewParagraph.innerHTML = response.crew[key].bio;
        this.crewImage.style.backgroundImage = `url(${response.crew[key].images.png})`;
    }

    addTechnologyInfoToUI(response, key) {
        // technology
        this.technologyName.innerHTML = response.technology[key].name;
        this.technologyParagraph.innerHTML = response.technology[key].description;
        this.technologyImage.style.backgroundImage = `url(${response.technology[key].images.portrait})`;
    }

    changePlanetButtonState(target) {

        for (let index = 0; index < 4; index++) {
            target.parentElement.parentElement.children[index].style.borderBottom = "0";
        }
        target.parentElement.style.borderBottom = "2px solid #fff";
    }


    changeCrewButtonState(target) {
        for (let index = 0; index < 4; index++) {
            target.parentElement.children[index].style.backgroundColor = "#979797";
        }
        target.style.backgroundColor = "#fff";
    }

    changeTechnologyButtonState(target) {
        for (let index = 0; index < 3; index++) {
            target.parentElement.children[index].style.backgroundColor = "transparent";
            target.parentElement.children[index].style.color = "#fff";
        }
        target.style.backgroundColor = "#fff";
        target.style.color = "#000";

    }
}

