let counter = 0;
let higherLowerGeneratedCard;
let redOrBlackGeneratedCard;
let inOutGeneratedCard;
$("#cardCount").html(cards.length)

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function updateCardCount(){
    $("#cardCount").html(cards.length)
}


function win(pickedCard){
    console.log("win");
    counter+=1;
    updateButton(counter);
    console.log("win counter is at " + counter)
    console.log("-------------------------------------------")
    updateCardBackground(pickedCard);
}

function lose(pickedCard){
    updateCardBackground(pickedCard);
    sleep(1200).then(() => {
    console.log("lose");
    counter = 0;
    updateAllCards();
    updateButton(counter);
    console.log("counter is reset to " + counter)
    console.log("-------------------------------------------")
    })
}


function updateButton(counter){
    if (counter == 0){
        $("#button1").html("Red");
        $("#button2").html("Black");
    } else if (counter == 1){
        $("#button1").html("Higher");
        $("#button2").html("Lower");
    } else if (counter == 2){
        $("#button1").html("In");
        $("#button2").html("Out");
    } else if (counter == 3){
        $("#button1").html("Red");
        $("#button2").html("Black");
    } else if (counter == 4){
        $("#button1").html("Higher");
        $("#button2").html("Lower");
    } else if (counter == 5){
        $("#button1").html("In");
        $("#button2").html("Out");
    }
}


function generateRandomCard(){
    let num = (Math.floor(Math.random() * cards.length));
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

function playGame(color, highlow, inout){
    if (counter == 0){
        console.log("You chose: " + color)
        redOrBlack(color);
    } else if (counter == 1){
        console.log("You chose: " + highlow)
        higherLower(highlow);
    } else if (counter == 2){
        console.log("You chose: " + inout)
        inOrOut(inout);
    } else if (counter == 3){
        console.log("You chose: " + color)
        redOrBlack(color);
    } else if (counter == 4){
        console.log("You chose: " + highlow)
        higherLower(highlow);
    } else if (counter == 5){
        console.log("You chose: " + inout)
        inOrOut(inout);
    }
}


function redOrBlack(color){
    redOrBlackGeneratedCard = generateRandomCard();
    console.log("The red or black function's generated card is " + redOrBlackGeneratedCard.value + " of " + redOrBlackGeneratedCard.suit)
    if (color == "red"){
        if (redOrBlackGeneratedCard.suit == "heart" || redOrBlackGeneratedCard.suit == "diamond"){
            win(redOrBlackGeneratedCard);
        }else{
            counter+=1;
            lose(redOrBlackGeneratedCard);
        }
    }
    if (color == "black"){
        if (redOrBlackGeneratedCard.suit == "spade" || redOrBlackGeneratedCard.suit == "club"){
            win(redOrBlackGeneratedCard);
        }else{
            counter+=1;
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
            counter+=1;
            lose(higherLowerGeneratedCard);
        }
    }
    if (highlow == "lower"){
        if (higherLowerGeneratedCard.value < redOrBlackGeneratedCard.value){
            win(higherLowerGeneratedCard);
        } else{
            counter+=1;
            lose(higherLowerGeneratedCard);
        }
    }
    
}

function inOrOut(inout){
    let num1 = redOrBlackGeneratedCard.value;
    let num2 = higherLowerGeneratedCard.value;
    console.log("Inside the InOrOut game, we are deciding between the values " + num1 + " and " + num2);
    let nums = [num1, num2];
    nums.sort();
    inOutGeneratedCard = generateRandomCard();
    console.log("inside of in or out game, the random card generated is " + inOutGeneratedCard.value + " of " + inOutGeneratedCard.suit);
    if (inout == "in"){
        if (inOutGeneratedCard.value < nums[1] && inOutGeneratedCard.value > nums[0]){
            win(inOutGeneratedCard);
        } else{
            counter+=1;
            lose(inOutGeneratedCard);
        }
    }
    if (inout == "out"){
        if (inOutGeneratedCard.value < nums[0] || inOutGeneratedCard.value > nums[1]){
            win(inOutGeneratedCard);
        } else{
            counter+=1;
            lose(inOutGeneratedCard);
        }   
    }
    
}

function updateAllCards(){
    $(".card").css("background-image", "url('../pics/red_back.png')");

}
function updateCardBackground(pickedCard){
    let cardName = pickedCard.name;
    if (counter == 1){
        $("#card1").css("background-image", "url('../pics/" + cardName + ".png')");
    }
    if (counter == 2){
        $("#card2").css("background-image", "url('../pics/" + cardName + ".png')");
    }
    if (counter == 3){
        $("#card3").css("background-image", "url('../pics/" + cardName + ".png')");
    }
    if (counter == 4){
        $("#card4").css("background-image", "url('../pics/" + cardName + ".png')");
    }
    if (counter == 5){
        $("#card5").css("background-image", "url('../pics/" + cardName + ".png')");
    }
    if (counter == 6){
        $("#card6").css("background-image", "url('../pics/" + cardName + ".png')");
    }
}

function resetDeck(){
    cards.push.apply(cards, usedCards);
    usedCards = [];
    counter = 0;
    updateButton(counter);
    updateAllCards();
    updateCardCount();
}