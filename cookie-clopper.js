//DOM -- Document Object Model// Document const cookieCountElement = document.getElementById("cookie--count");
const cookieTextCount = document.getElementById("cookie--count")
const addButtonElement = document.getElementById("add--button");
const clearButtonElement = document.getElementById("clear--button");
const saveButtonElement = document.getElementById("save--button");
const saveListElement = document.getElementById("save--list");
const setDoubleClickPrice = document.getElementById("double--click--price");

let count = 0;
let upgradeDouble = 1;
let doubleUpgradeCost = 50

const doubleUpgrade = () => {
    if (cookieTextCount.innerText >= doubleUpgradeCost) {
        upgradeDouble = upgradeDouble*2;
        cookieTextCount.innerText = count - doubleUpgradeCost;
        count = count -doubleUpgradeCost;
        doubleUpgradeCost = doubleUpgradeCost*2;
        setDoubleClickPrice.innerText = doubleUpgradeCost;

    } else {
        upgradeDouble == upgradeDouble;
    }
}

const increment = () => {
    count += upgradeDouble;
    cookieTextCount.innerText = count;
 
}
const clearcook = () => {
    count -= count;
    upgradeDouble = 1;
    doubleUpgradeCost = 50;
    setDoubleClickPrice.innerText = doubleUpgradeCost;
    cookieTextCount.innerText = count;
    
}


//Onclick -- which is a attribute within html itself//Eventlistners --