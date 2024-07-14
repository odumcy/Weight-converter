const outPut = document.getElementById("output");
const lbsInput = document.getElementById("lbsInput");
const grams = document.getElementById("gramsOutput");
const kilograms = document.getElementById("kgOutput");
const oz = document.getElementById("ozOutput");

function numPicker(e) {
  outPut.style.visibility = "visible";

  let lbs = e.target.value;
  grams.innerHTML = lbs / 0.0022046;
  kilograms.innerHTML = lbs / 2.2046;
  oz.innerHTML = lbs * 16;
}

outPut.style.visibility = "hidden";

lbsInput.addEventListener("input", numPicker);
