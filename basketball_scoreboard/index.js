let homeScore = document.getElementById("home_score")
let guestScore = document.getElementById("guest_score")
let num1 = 0
let num2 = 0
homeScore.textContent = num1 
guestScore.textContent =num2

function homeAddOne() {
    num1 += 1
    homeScore.textContent = num1 
}

function homeAddTwo() {
    num1 += 2
    homeScore.textContent = num1 
}

function homeAddThree() {
    num1 += 3
    homeScore.textContent = num1 
}

function guestAddOne() {    
    num2 += 1
    guestScore.textContent = num2 

}

function guestAddTwo() {    
    num2 += 2
    guestScore.textContent = num2 

}

function guestAddThree() {    
    num2 += 3
    guestScore.textContent = num2 

}

function newGame() {
    num1 = 0
    num2 = 0
    homeScore.textContent = num1 
    guestScore.textContent = num2
}