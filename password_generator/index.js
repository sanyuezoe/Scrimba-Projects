const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let pwdOneEl = document.getElementById("random-pwd1")
let pwdTwoEl = document.getElementById("random-pwd2")
let pedLength = document.getElementById("pwdlength")
let pwdOne = ""
let pwdTwo = ""

function getPwd(){
    if (pedLength.value === ""  ) {
        for(let i = 0; i<15; i++) {
            pwdOne += characters[Math.floor(Math.random() * characters.length)]
            pwdOneEl.textContent = pwdOne
            pwdTwo += characters[Math.floor(Math.random() * characters.length)]
            pwdTwoEl.textContent = pwdTwo
        }
    } else {
        x = parseInt(pedLength.value)
        for(let i = 0; i<x; i++) {
            pwdOne += characters[Math.floor(Math.random() * characters.length)]
            pwdOneEl.textContent = pwdOne
            pwdTwo += characters[Math.floor(Math.random() * characters.length)]
            pwdTwoEl.textContent = pwdTwo
        }

    } 

}


function generatePwd() {
    if (pwdOneEl.textContent === "" && pwdTwoEl.textContent === "") {
        getPwd();
    }else {
        pwdOne = "";
        pwdTwo = "";
        getPwd()
    }
}

