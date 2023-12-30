function calculate() {
    var sideA = parseFloat(document.getElementById("sidea").value);
    var sideB = parseFloat(document.getElementById("sideb").value);

    var sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

    var resultHypotenuse = document.getElementById("resultHypotenuse");
    resultHypotenuse.textContent = "The hypotenuse is " + sideC.toFixed(2);
    resultHypotenuse.style.display = "block";
}

function convert() {
    var meter = parseFloat(document.getElementById("meter").value);
    var centimeter = meter * 100;

    var resultConversion = document.getElementById("resultConversion");
    resultConversion.textContent = meter + " meters is equal to " + centimeter + " centimeters";
    resultConversion.style.display = "block";
}
