let convertNum = document.getElementById("input-part")
let lengthText = document.getElementById("length-text")
let volumeText = document.getElementById("volume-text")
let massText = document.getElementById("mass-text")
let btn = document.getElementById("btn")

function unitConvert (){
    const a =convertNum.value
    let feet = (a * 3.281).toFixed(3)
    let gallon = (a * 0.264).toFixed(3)
    let pound = (a * 2.204).toFixed(3)
    let meter = (a / 3.281).toFixed(3)
    let liter = (a / 0.264).toFixed(3)
    let kilo = (a / 2.204).toFixed(3)
    lengthText.innerHTML =`${a} meters = ${feet} feet | ${a} feet = ${meter} meters `
    volumeText.innerHTML = `${a} liters = ${gallon} gallons | ${a} gallons = ${liter} liters `
    massText.innerHTML = `${a} kilos = ${pound} pounds | ${a} pounds = ${kilo} kilos`

}

function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }

btn.addEventListener("click", unitConvert)

