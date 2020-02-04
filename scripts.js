let counter = 0;
let higherLowerGeneratedCard;
let redOrBlackGeneratedCard;
let inOutGeneratedCard;

function win(){
    console.log("win");
    counter+=1;
    updateButton(counter);
    console.log("counter is at " + counter)
}

function lose(){
    console.log("lose");
    counter = 0;
    updateButton(counter);
    console.log("counter is at " + counter)
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
        $("#button1").html("Higher");
        $("#button2").html("Lower");
    } else if (counter == 4){
        $("#button1").html("Red");
        $("#button2").html("Black");
    } else if (counter == 5){
        $("#button1").html("In");
        $("#button2").html("Out");
    }
}


function generateRandomCard(){
    let num = (Math.floor(Math.random() * cards.length));
    let generatedCard = cards[num];
    cards.splice(num, 1);
    usedCards.push(generatedCard);
    console.log("inside genCard function, the following card was generated:" + generatedCard.value + " of " + generatedCard.suit)
    return generatedCard;
}

function playGame(color, highlow, inout){
    if (counter == 0){
        redOrBlack(color);
    } else if (counter == 1){
        higherLower(highlow);
    } else if (counter == 2){
        inOrOut(inout);
    } else if (counter == 3){
        redOrBlack(color);
    } else if (counter == 4){
        higherLower(highlow);
    } else if (counter == 5){
        inOrOut(inout);
    }
}


function redOrBlack(color){
    redOrBlackGeneratedCard = generateRandomCard()
    console.log("The red or black function's generated card is " + redOrBlackGeneratedCard.value + " of " + redOrBlackGeneratedCard.suit)
    if (color == "red"){
        if (redOrBlackGeneratedCard.suit == "heart" || redOrBlackGeneratedCard.suit == "diamond"){
            win()
        }else{
            lose()
        }
    }
    if (color == "black"){
        if (redOrBlackGeneratedCard.suit == "spade" || redOrBlackGeneratedCard.suit == "club"){
            win()
        }else{
            lose()
        }
    }
}

function higherLower(highlow){
    higherLowerGeneratedCard = generateRandomCard()
    console.log("The higher lower function's generated card is " + higherLowerGeneratedCard.value + " of " + higherLowerGeneratedCard.suit)
    console.log("the old value of the red/black card is " + redOrBlackGeneratedCard.value + " of " + redOrBlackGeneratedCard.suit)
    if (highlow == "higher"){
        if (higherLowerGeneratedCard.value > redOrBlackGeneratedCard.value){
            win()
        } else{
            lose()
        }
    }
    if (highlow == "lower"){
        if (higherLowerGeneratedCard.value < redOrBlackGeneratedCard.value){
            win()
        } else{
            lose()
        }
    }
    
}

function inOrOut(inout){
    let num1 = redOrBlackGeneratedCard.value;
    let num2 = higherLowerGeneratedCard.value;
    console.log("Inside the InOrOut game, we are deciding between the values " + num1 + " and " + num2)
    let nums = [num1, num2];
    nums.sort();
    inOutGeneratedCard = generateRandomCard();
    if (inout == "in"){
        if (inOutGeneratedCard.value <=nums[1] && inOutGeneratedCard.value >= nums[0]){
            win()
        } else{
            lose()
        }
    }
    if (inout == "out"){
        if (inOutGeneratedCard.value <=nums[0] || inOutGeneratedCard.value >= nums[1]){
            win()
        } else{
            lose()
        }   
    }
    
}