// évenement click

const click = document.getElementById("click-btn");
const counter = document.getElementById("click-counter");

click.addEventListener("click", function () {
    // console.log("c'est bon");
    counter.textContent = parseInt(counter.textContent) + 1;
});

// Réagir au changement de valeur
const texteu = document.getElementById("text-input");
const cText = document.getElementById("char-count");

texteu.addEventListener("input", function (evt) {
    // console.log("c'est bon");
    cText.textContent = evt.target.value.length;
});

// Envoyez les couleurs !

const hue = document.getElementById("hue");
const hueValue = document.getElementById("hue-value");
const saturation = document.getElementById("saturation");
const saturationValue = document.getElementById("saturation-value");
const lightness = document.getElementById("lightness");
const lightnessValue = document.getElementById("lightness-value");
const colorDisplay = document.querySelector(".color-display");

let hueLength = 0;
let SatLength = 0;
let LightLength = 0;

hue.addEventListener("input", function (evt) {
    hueLength = evt.target.value;
    hueValue.textContent = hueLength;
    colorDisplay.style.background = `hsl(${hueLength}, ${SatLength}%, ${LightLength}%)`;
});

saturation.addEventListener("input", function (evt) {
    SatLength = evt.target.value;
    saturationValue.textContent = SatLength + "%";
    colorDisplay.style.background = `hsl(${hueLength}, ${SatLength}%, ${LightLength}%)`;
});

lightness.addEventListener("input", function (evt) {
    LightLength = evt.target.value;
    lightnessValue.textContent = LightLength + "%";
    colorDisplay.style.background = `hsl(${hueLength}, ${SatLength}%, ${LightLength}%)`;
});

// Réagir au changement de taille de la fenêtre du navigateur
const windowW = document.getElementById("window-width");
const windowH = document.getElementById("window-height");

function evt() {
    windowW.textContent = window.innerWidth;
    windowH.textContent = window.innerHeight;

}

window.addEventListener("resize", evt);

// Réagir à la soumission d'un formulaire

const form = document.querySelector("form");
const name = document.getElementById("name");
const age = document.getElementById("age");

form.addEventListener("submit", function () {
    if (this.name.value === '' || this.name.length < 2 || this.age.value === '' || this.age.value < 18)
        alert("informations incorrectes");
});

// Réagir à l'appui sur une touche

const rond = document.querySelector("#square");

document.addEventListener("keydown", (event) => {
    const key = event.key;
    let rondTop = parseInt(rond.style.top) || 0;
    let rondLeft = parseInt(rond.style.left) || 0;

    if (key === "ArrowUp" && rondTop > 0) {
        rondTop -= 10;
    } else if (key === "ArrowDown" && rondTop < 390) {
        rondTop += 10;
    } else if (key === "ArrowLeft" && rondLeft > 0) {
        rondLeft -= 10;
    } else if (key === "ArrowRight" && rondLeft < 390) {
        rondLeft += 10;
    }

    rond.style.top = rondTop + "px";
    rond.style.left = rondLeft + "px";
});


// Réagir au drag

const dragElem = document.querySelector(".drag-element");
const dropZone = document.querySelector(".drop-zone");
dragElem.draggable = true;

dragElem.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", event.target.id);
});

dropZone.addEventListener("dragover", function (event) {
    event.preventDefault();
});

dropZone.addEventListener("drop", function (event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let draggableElement = document.getElementById(data);
    dropZone.appendChild(draggableElement);
});

dragElem.setAttribute("id", "dragelement");