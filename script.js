function calculate(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = 0;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert("Division by zero is not allowed!");
                return;
            }
            result = num1 / num2;
            break;
        default:
            break;
    }

    var resultElement = document.getElementById("result");
    resultElement.textContent = "Result: " + result.toFixed(2);
    resultElement.style.display = "block";
}

function calculateHypotenuse() {
    var sideA = parseFloat(document.getElementById("sidea").value);
    var sideB = parseFloat(document.getElementById("sideb").value);

    var sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

    var resultHypotenuse = document.getElementById("resultHypotenuse");
    resultHypotenuse.textContent = "The hypotenuse is " + sideC.toFixed(2);
    resultHypotenuse.style.display = "block";
}

function convertToCentimeter() {
    var meter = parseFloat(document.getElementById("meter").value);
    var centimeter = meter * 100;

    var resultConversion = document.getElementById("resultConversion");
    resultConversion.textContent = meter + " meters is equal to " + centimeter + " centimeters";
    resultConversion.style.display = "block";
}

function convertToFeet() {
    var inches = parseFloat(document.getElementById("inches").value);
    var feet = inches / 12;

    var resultFeet = document.getElementById("resultFeet");
    resultFeet.textContent = inches + " inches is equal to " + feet.toFixed(2) + " feet";
    resultFeet.style.display = "block";
}