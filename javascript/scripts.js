let counter = 0;
let higherLowerGeneratedCard;
let redOrBlackGeneratedCard;
let inOutGeneratedCard;
$("#cardCount").html(cards.length)


// Function to create sleep, which lets program display card even when user choses incorrect
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function updateCardCount(){
    $("#cardCount").html(cards.length)
}

// When a user picks any correct choice, the counter variable increases. This counter variable tracks which question is being asked, which
// is used to change button HTML, show the correct cards, etc
function win(pickedCard){
    console.log("win");
    updateCardBackground(pickedCard);
    counter+=1;
    if(counter == 6){
        counter=10;
    }
    console.log("win counter is at " + counter)
    console.log("-------------------------------------------")
    
    if (counter==10){
        console.log("Counter is at 10")
        sleep(1200).then(() => {
        updateAllCards();
        })
    }
    updateButton(counter);
    if (counter == 16){
        alert("Oh my god, you actually won. Congratulations.")
    }
}

// When a user loses a round, the card is flipped, then the program waits 1.2 seconds. Then, the counter is reset to 0. All cards are
// flipped over and the game restarts.
function lose(pickedCard){
    
    updateCardBackground(pickedCard);
    counter++;
    sleep(1000).then(() => {
    console.log("lose");
    if (counter >= 10){
        counter = 10;
    } else {
        counter = 0;
    }
    updateAllCards();
    updateButton(counter);
    console.log("counter is reset to " + counter)
    console.log("-------------------------------------------")
    })
}

// Depending on the win counter, the choice of buttons will change
function updateButton(counter){
    if (counter == 0 || counter == 6 || counter ==10){
        $("#button1").html("Red");
        $("#button2").html("Black");
    } else if (counter == 1 || counter == 11){
        $("#button1").html("Higher");
        $("#button2").html("Lower");
    } else if (counter == 2 || counter == 12){
        $("#button1").html("In");
        $("#button2").html("Out");
    } else if (counter == 3 || counter == 13){
        $("#button1").html("Red");
        $("#button2").html("Black");
    } else if (counter == 4 || counter == 14){
        $("#button1").html("Higher");
        $("#button2").html("Lower");
    } else if (counter == 5 || counter == 15){
        $("#button1").html("In");
        $("#button2").html("Out");
    }
}

// This is the main program which generates a random card. It also takes care of removing that card from the deck, and keeping the 
// used cards in a seperate list.
function generateRandomCard(){
    let num = (Math.floor(Math.random() * cards.length));
    if(cards.length == 0){
        alert("No more cards left in the deck, sorry. Reseting deck.")
        resetDeck();
    } else{
    let generatedCard = cards[num];
    for(let i = 0; i < cards.length; i++){ 
        if (cards[i] === generatedCard) {
            cards.splice(i, 1); 
        }
    }
    $("#cardCount").html(cards.length);
    usedCards.push(generatedCard);
    return generatedCard;
    }
}

// When either button is clicked, this function is called. Depending on where the counter is at, a game is triggered. The buttons pass
// the parameter to their respective game function.
function playGame(color, highlow, inout){
    if (counter == 0 || counter == 10){
        console.log("You chose: " + color)
        redOrBlack(color);
    } else if (counter == 1 || counter == 11){
        console.log("You chose: " + highlow)
        higherLower(highlow);
    } else if (counter == 2 || counter == 12){
        console.log("You chose: " + inout)
        inOrOut(inout);
    } else if (counter == 3 || counter == 13){
        console.log("You chose: " + color)
        redOrBlack(color);
    } else if (counter == 4 || counter == 14){
        console.log("You chose: " + highlow)
        higherLower(highlow);
    } else if (counter == 5 || counter == 15){
        console.log("You chose: " + inout)
        inOrOut(inout);
    }




    
}

// each game logic
function redOrBlack(color){
    redOrBlackGeneratedCard = generateRandomCard();
    console.log("The red or black function's generated card is " + redOrBlackGeneratedCard.value + " of " + redOrBlackGeneratedCard.suit)
    if (color == "red"){
        if (redOrBlackGeneratedCard.suit == "heart" || redOrBlackGeneratedCard.suit == "diamond"){
            win(redOrBlackGeneratedCard);
        }else{
            lose(redOrBlackGeneratedCard);
        }
    }
    if (color == "black"){
        if (redOrBlackGeneratedCard.suit == "spade" || redOrBlackGeneratedCard.suit == "club"){
            win(redOrBlackGeneratedCard);
        }else{
            lose(redOrBlackGeneratedCard);
        }
    }
}

function higherLower(highlow){
    higherLowerGeneratedCard = generateRandomCard();
    console.log("The higher lower function's generated card is " + higherLowerGeneratedCard.value + " of " + higherLowerGeneratedCard.suit);
    console.log("the old value of the red/black card is " + redOrBlackGeneratedCard.value + " of " + redOrBlackGeneratedCard.suit);
    if (highlow == "higher"){
        if (higherLowerGeneratedCard.value > redOrBlackGeneratedCard.value){
            win(higherLowerGeneratedCard);
        } else{
            lose(higherLowerGeneratedCard);
        }
    }
    if (highlow == "lower"){
        if (higherLowerGeneratedCard.value < redOrBlackGeneratedCard.value){
            win(higherLowerGeneratedCard);
        } else{
            lose(higherLowerGeneratedCard);
        }
    }
    
}

function inOrOut(inout){
    let small = 0;
    let big = 1;
    let num1 = redOrBlackGeneratedCard.value;
    let num2 = higherLowerGeneratedCard.value;
    if (num1>num2){
        small = num2;
        big = num1;
    } else if (num1<num2 || num1 == num2){
        small = num1;
        big = num2;
    } 
    console.log("Inside the InOrOut game, we are deciding between the values " + small + " and " + big);
    inOutGeneratedCard = generateRandomCard();
    console.log("inside of in or out game, the random card generated is " + inOutGeneratedCard.value + " of " + inOutGeneratedCard.suit);
    if (inout == "in"){
        if (inOutGeneratedCard.value < big && inOutGeneratedCard.value > small){
            win(inOutGeneratedCard);
        } else{
            lose(inOutGeneratedCard);
        }
    }
    if (inout == "out"){
        if (inOutGeneratedCard.value < small || inOutGeneratedCard.value > big){
            win(inOutGeneratedCard);
        } else{
            lose(inOutGeneratedCard);
        }   
    }
    
}


// When loss occurs, this function is called
function updateAllCards(){
    $(".card").css("background-image", "url('./pics/" + $("#colors").val() + "_back.png')");

}

// When a card is generated for any game, this function changes the card background image to the generated card.
function updateCardBackground(pickedCard){
    let cardName = pickedCard.name;
    if (counter == 0){
        $("#card1").css("background-image", "url('./pics/" + cardName + ".png')");
    }
    if (counter == 1){
        $("#card2").css("background-image", "url('./pics/" + cardName + ".png')");
    }
    if (counter == 2){
        $("#card3").css("background-image", "url('./pics/" + cardName + ".png')");
    }
    if (counter == 3){
        $("#card4").css("background-image", "url('./pics/" + cardName + ".png')");
    }
    if (counter == 4){
        $("#card5").css("background-image", "url('./pics/" + cardName + ".png')");
    }
    if (counter == 5){
        $("#card6").css("background-image", "url('./pics/" + cardName + ".png')");
    }
    if (counter == 10){
        $("#card6").css("background-image", "url('./pics/" + cardName + ".png')");
    }
    if (counter == 11){
        $("#card5").css("background-image", "url('./pics/" + cardName + ".png')");
    }
    if (counter == 12){
        $("#card4").css("background-image", "url('./pics/" + cardName + ".png')");
    }
    if (counter == 13){
        $("#card3").css("background-image", "url('./pics/" + cardName + ".png')");
    }
    if (counter == 14){
        $("#card2").css("background-image", "url('./pics/" + cardName + ".png')");
    }
    if (counter == 15){
        $("#card1").css("background-image", "url('./pics/" + cardName + ".png')");
    }

}

// When a user clicks the reset button, the used card deck is re-added to the remaining deck, all cards are flipped over, and win
// counter is reset to 0.
function resetDeck(){
    cards.push.apply(cards, usedCards);
    usedCards = [];
    counter = 0;
    updateButton(counter);
    updateAllCards();
    updateCardCount();
}

$("#colors").change(function() {
    resetDeck();
});