let elForm =document.querySelector(".form");
let elInput = document.querySelector(".form-input");
let elOlma = document.querySelector(".olma");
let elNok = document.querySelector(".nok");
let elSabzi = document.querySelector(".sabzi");
let elPiyoz = document.querySelector(".piyoz");
elForm.addEventListener("submit", function (evt){
    evt.preventDefault();
    const inputVal = String(elInput.value);
    if(inputVal === "olma" || inputVal==="OLMA" || inputVal==="Olma"){
        elOlma.textContent = inputVal;
    }
    if(inputVal === "nok" || inputVal==="NOK" || inputVal==="Nok"){
        elNok.textContent = inputVal;
    }
    if(inputVal === "sabzi" || inputVal==="SABZI" || inputVal==="Sabzi"){
        elSabzi.textContent = inputVal;
    }
    if(inputVal === "piyoz" || inputVal==="PIYOZ" || inputVal==="Piyoz"){
        elPiyoz.textContent = inputVal;
    }
});