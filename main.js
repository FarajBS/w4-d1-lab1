let squer = document.getElementById("squer");

let height = document.getElementById("height");
let width = document.getElementById("width");
let backgroundC = document.getElementById("background");
let bordeRredus = document.getElementById("borderRredus");

let heightResult = document.getElementById("height");
let widthResult = document.getElementById("width");
let backgroundCResult = document.getElementById("background");
let bordeRredusResult = document.getElementById("borderRredus");





let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    squer.style.height = heightResult;
    squer.style.width = widthResult;
    squer.style.backgroundColor = backgroundCResult;
    squer.style.borderRadius = bordeRredusResult;
});

