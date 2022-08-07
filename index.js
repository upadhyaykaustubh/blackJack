let player = {
    name: "KAUSTUBH",
    money: 200
}
let cards = []
let sum = 0
let hasblackjack = false
let isalive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.money
function getRandomCard(){
    let number = Math.floor(Math.random()*13) + 1 //1 - 13
    if(number > 10){
        return 10
    }
    else if(number === 1){
        return 11
    }
    else {
        return number
    }

}
function startgame(){
    isalive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards =[firstcard,secondcard]
    sum=firstcard+secondcard
    rendergame()
}

function rendergame(){

    cardsEl.textContent = "Cards:" 
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" +sum
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message = "Wphoo! You've got BlackJack!"
        hasblackjack = true
    }
    else{
        message = "you're out of the game! "
        isalive = false
    }
    messageEl.textContent = message
}
function newcard(){
    if(isalive === true && hasblackjack === false){
    let card  = getRandomCard()
    sum += card
    cards.push(card)
    rendergame()
    }
}