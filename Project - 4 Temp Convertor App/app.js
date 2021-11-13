const celcius = document.querySelector("#celcius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");
const tempInputs = document.querySelectorAll("input");
const clear = document.querySelector(".clear");

tempInputs.forEach(function(input) {
    input.addEventListener("input", function(e) {
        let tempValue = parseInt(e.target.value);
        let inputName = e.target.name;
        

        if(inputName === 'celcius') {
            
            let fahrenheitValue = tempValue * 1.8 + 32;
            fahrenheit.value = fahrenheitValue.toFixed(2);

            let kelvinValue = tempValue + 273.15;
            kelvin.value = kelvinValue.toFixed(2);
        }

        else if (inputName === 'fahrenheit') {

            let celciusValue = (tempValue - 32) / 1.8;
            celcius.value = celciusValue.toFixed(2);

            let kelvinValue = (tempValue - 32) / 1.8 + 273.15;
            kelvin.value = kelvinValue.toFixed(2);
        }

        else if (inputName === 'kelvin') {

            let celciusValue = (tempValue - 273.15);
            celcius.value = celciusValue.toFixed(2);

            let fahrenheitValue = (tempValue - 273.15) * 1.8 + 32;
            fahrenheit.value = fahrenheitValue.toFixed(2);
        }
    });
});

clear.addEventListener('click', function(e) {
    celcius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";
 })


