/**
 * Created by coderslab on 03.12.15.
 */
document.addEventListener("DOMContentLoaded", function(){
    var celsToFhr = document.querySelector("#celsToFhr");
    var fhrToCels = document.querySelector("#fhrToCels");
    var resultElement = document.querySelector("#resultText");
    var unitInput = document.querySelector("#unitInput");

    celsToFhr.addEventListener("click", function(){
        var userInput = unitInput.value;
        unitInput.value = "";
        var unitsToConvert = parseFloat(userInput);
        var unitsConverted = 0;

        if(isNaN(unitsToConvert)){
            resultElement.innerHTML = "Złe dane";
        }
        else{
            unitsConverted = unitsToConvert * 1.8 + 32;
            resultElement.innerHTML = unitsConverted + " F";
        }
    });

    fhrToCels.addEventListener("click", function(){
        var userInput = unitInput.value;
        unitInput.value = "";
        var unitsToConvert = parseFloat(userInput);
        var unitsConverted = 0;

        if(isNaN(unitsToConvert)){
            resultElement.innerHTML = "Złe dane";
        }
        else{
            unitsConverted = (unitsToConvert - 32) / 1.8;
            resultElement.innerHTML = unitsConverted + " C";
        }
    });
});