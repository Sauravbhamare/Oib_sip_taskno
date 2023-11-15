function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit").value;
    var celsiusResult = (fahrenheitInput - 32) * 5 / 9;
    document.getElementById("result").innerText = "Result in Celsius: " + celsiusResult.toFixed(2) + " °C";
}

function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius").value;
    var fahrenheitResult = (celsiusInput * 9 / 5) + 32;
    document.getElementById("result").innerText = "Result in Fahrenheit: " + fahrenheitResult.toFixed(2) + " °F";
}
