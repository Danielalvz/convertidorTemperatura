let inputCelsius = document.getElementById("inputCelsius");
let btnConvertir = document.querySelector(".btnConvertir");
let resultadosDiv = document.getElementById("resultados");

btnConvertir.addEventListener("click", convertirTemperatura);

function convertirTemperatura() {
    let inputCelsiusValue = parseFloat(inputCelsius.value);

    // Limpiar el contenido previo
    resultadosDiv.innerHTML = "";

    const fahrenheit = (inputCelsiusValue * 1.8) + 32;
    const kelvin = inputCelsiusValue + 273.15;

    if (isNaN(inputCelsiusValue) || inputCelsiusValue === "") {
        resultadosDiv.innerHTML = "<p>Ingresa un número válido</p>";
    } else {
        resultadosDiv.innerHTML += `<p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>`;
        resultadosDiv.innerHTML += `<p>Grados Kelvin: ${kelvin.toFixed(2)}</p>`;
    }
}