let Len = document.getElementById("item4")
console.log(Len)

let Vol = document.getElementById("item6")
console.log(Vol)

let Mas = document.getElementById("item8")
console.log(Mas)
let Input = document.getElementById("item2")


const num = prompt()

Input.textContent = num

function LenMF(){
    let feet = num *  3.28;
    let Feet = feet.toFixed(3)
    let meter = num * 0.3048;
    let Meter = meter.toFixed(3)
   // num + " meters = " + Feet + " Feet | " + num + " feet = " + Meter
    Len.textContent = num + " meters = " + Feet + " feet | " + num + " feet = " + Meter +" meters"
}

console.log(LenMF())

function volLG(){
    let liters = num *  0.264;
    let liter = liters.toFixed(3)
    let gallons = num * 4.546;
    let gallon = gallons.toFixed(3)
   // num + " meters = " + Feet + " Feet | " + num + " feet = " + Meter
    Vol.textContent = num + " liters = " + liter + " gallons | " + num + " gallons = " + gallon +" liters"
}

console.log(volLG())

function massKP(){
    const kilo = num *  2.20;
    const kg = kilo.toFixed(3);
    const pounds = num * 0.453;
    const pound = pounds.toFixed(3);
   // num + " meters = " + Feet + " Feet | " + num + " feet = " + Meter
    Mas.textContent = num + " pounds = " + kg + " killo | " + num + " killo = " + pound +" pounds"
   
}

console.log(massKP())
