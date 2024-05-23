
let cards = [] //declare an array
let sum = 0 
let hasBlackJack = false
let isAlive = false 
let message = ""

let sumEl = document.getElementById("sum-el")   //Store the sum paragraph in a variable called sumEl
let messageEl = document.getElementById("message-el") //Store the message-el paragraph in a variable called messageEl
let cardsEl = document.getElementById("cards-el")

//Use an object to store the name and chips of the player 
let player = {
    name: "Alphawoman", 
    chips: 5000
}

playerEl = document.getElementById("player-el")  //grab the player's id from html
playerEl.textContent = player.name + ": $" + player.chips //render the id + details 


    // 1. Create a function, getRandomCard(), that always returns the number 5
    function getRandomCard(){
        // if 1     -> return 11
    // if 11-13 -> return 10
        let randomNumber = Math.floor (Math.random ()* 13) + 1
        if(randomNumber > 10){
            return 10
        } else if(randomNumber === 1){
            return  11
        } else {
            return randomNumber
        }
    }
    // Create a new function called startGame() that calls renderGame()
    function startGame(){
        isAlive = true 
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard] //update the cards array
        sum = firstCard + secondCard  //update sum
    renderGame()
    }

    function renderGame(){
    cardsEl.textContent = "Cards: "  //+ cards[0] + " " + cards[1]
    // Create a for loop that renders out all the cards instead of just two
    for( let i = 0; i< cards.length; i ++){ 
            cardsEl.textContent += cards[i] + " " 
           }  

        sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"

    }else if (sum === 21){
        message = "Whohoo! You got the Blackjack! 🥳"
        hasBlackJack = true
    } else{
        message = "You're out of the game 😭"
        isAlive = false
    } 
    messageEl.textContent = message  
    } 

function newCard(){
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive ===true && hasBlackJack===false){
    let card = getRandomCard() //set card to random number(sss)
    sum += card  
    cards.push(card) 
    renderGame()
    }
    } 
    
    


    /*// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation
 let airbnbCastleListing = {
    namee: "castle house",
    price: 500,
    secure: true,
    rooms: [1, 2, 3]
 }

 console.log(airbnbCastleListing.namee) 
 console.log(airbnbCastleListing.secure)
 console.log(airbnbCastleListing.price)
 console.log(airbnbCastleListing.rooms[1])





 Classwork
Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age <= 20){
    console.log("You cannot enter the club!")
} else{
    console.log("Welcome!")
}

    // Check if the person is elegible for a birthday card from the King! (100)

let agee = 102

// if less than 100    -> "Not elegible"

if (agee < 10){
    console.log("Not eligible") 
} else if (agee ===100){
    console.log("Here's your birthday card from the King!")
}else{
 console.log("Not eligible, You have already gotten one") 
}
// else if exactly 100 -> "Here is your birthday card from the King!"
// else 


// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for (let i = 10; i < 101; i += 10){
    console.log(i) 
    }   

    

let messagee = [7, 3, 9] 

for (i = 0; i = message.length; i ++){
    console.log(message[i])
    
    
    let randomNumber = Math.floor (Math.random() * 12) + 1 

console.log(randomNumber) 

function rollDice(){
    return randomNumber 
}
}


Challenge: 
let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

if(hasSolvedChallenge === false && hasHintsLeft ===false){  
    showSolution() 
}

function showSolution() {
    console.log("Showing the solution....")
}


// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = true
let likesStartups = true 

if(likesDocumentaries ===true || likesStartups===true){
    recommendMovie() 
}


function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}


// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name: "Ifure",
    age:  24,
    country: "Nigeria"
}

function logData(){
console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData() 

let age = 60

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable


if (age < 6){
    console.log("free")
}else if(age < 18){
    console.log("child discount")
}else if(age < 27){
    console.log("student discount")
}else if(age < 67){
    console.log("full price")
} else(age > 66)
    message: "senior citizen discount" 


Classwork
    let dayOfMonth = 31
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if(dayOfMonth ===31 && weekday ==="Friday"){
    console.log("😱")  
}
*/
