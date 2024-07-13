const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const pElLength = document.getElementById("p-el-length");
const pElVolume = document.getElementById("p-el-volume");
const pElMass = document.getElementById("p-el-mass");

function getInputValueOrPlaceholder(input) {
  return input.value || input.placeholder;
}

function adjustInputWidth(input) {
  input.style.width =
    (input.value.length || input.placeholder.length) + 1 + "ch";
}

function convert() {
  let inputNumber = getInputValueOrPlaceholder(inputEl);

  const feetToMeter = convertFeetToMeter(inputNumber);
  const meterToFeet = convertMeterToFeet(inputNumber);
  const literToGallon = convertLiterToGallon(inputNumber);
  const gallonToLiter = convertGallonToLiter(inputNumber);
  const kilogramToPound = convertKilogramToPound(inputNumber);
  const poundToKilogram = convertPoundToKilogram(inputNumber);

  pElLength.textContent = `${inputNumber} meters = ${meterToFeet} feet | ${inputNumber} feet = ${feetToMeter} meters`;
  pElVolume.textContent = `${inputNumber} liters = ${literToGallon} gallons | ${inputNumber} gallons = ${gallonToLiter} liters`;
  pElMass.textContent = `${inputNumber} kilos = ${kilogramToPound} pounds | ${inputNumber} pounds = ${poundToKilogram} kilos`;
}

// <--- Unit conversion functions --->
function convertMeterToFeet(meter) {
  return meter * 3.28084;
}

function convertFeetToMeter(feet) {
  return feet * 0.3048;
}

function convertLiterToGallon(liter) {
  return liter * 0.264172;
}

function convertGallonToLiter(gallon) {
  return gallon * 3.78541;
}

function convertKilogramToPound(kilogram) {
  return kilogram * 2.20462;
}

function convertPoundToKilogram(pound) {
  return pound * 0.453592;
}

// <--- Document load events --->
document.addEventListener("DOMContentLoaded", function () {
  adjustInputWidth(inputEl);

  inputEl.addEventListener("input", function () {
    adjustInputWidth(inputEl);
  });

  convertBtn.addEventListener("click", convert);
});
