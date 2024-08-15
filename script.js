
const firstSelectBox = document.getElementById("currentState");
const SecondSelectBox = document.getElementById("convertIn");
const selectBox = document.querySelectorAll("select")

selectBox.forEach(function(select){
    select.addEventListener('change', function() {
    const selectedValue = select.value;
    for(var i = 0 ; i< select.options.length ; i++){
        if(selectedValue === select.options[i].value){
            select.options[i].style.display = "none"
        }
        else{
            select.options[i].style.display = "block"
        }
    }
})
}
)

firstSelectBox.onchange = function() {
    const val = firstSelectBox.value;
    for (let i = 0; i < SecondSelectBox.options.length; i++) {
        if (val === SecondSelectBox.options[i].value) {
            SecondSelectBox.options[i].style.display = "none";
            var z = i;
            SecondSelectBox.value = SecondSelectBox.options[++z].value

        } else {
            SecondSelectBox.options[i].style.display = "block";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector("input");
    const currentState = document.getElementById("currentState");
    const convertIn = document.getElementById("convertIn");
    const output = document.getElementById("output");
    const state = document.getElementById("state");
    const convertButton = document.getElementById("convert");

    function convertTemperature() {
        const inputValue = parseFloat(input.value);
        const fromUnit = currentState.value;
        const toUnit = convertIn.value;

        let result;

        if (fromUnit === "Celcuis") {
            if (toUnit === "Farenheit") {
                result = (inputValue * 9/5) + 32;
            } else if (toUnit === "Kelvin") {
                result = inputValue + 273.15;
            } else {
                result = inputValue; 
            }
        } else if (fromUnit === "Farenheit") {
            if (toUnit === "Celcuis") {
                result = (inputValue - 32) * 5/9;
            } else if (toUnit === "Kelvin") {
                result = (inputValue - 32) * 5/9 + 273.15;
            } else {
                result = inputValue;
            }
        } else if (fromUnit === "Kelvin") {
            if (toUnit === "Celcuis") {
                result = inputValue - 273.15;
            } else if (toUnit === "Farenheit") {
                result = (inputValue - 273.15) * 9/5 + 32;
            } else {
                result = inputValue; 
            }
        }

        output.innerText = result.toFixed(2);
        state.innerText = toUnit[0].toUpperCase();
    }

    convertButton.addEventListener("click", convertTemperature);
});
