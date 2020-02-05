function checkTotals(){
    var numRed = 0;
    var numBlack = 0;
    for (i=0; i<cards.length; i++){
        if (cards[i].suit == 'heart' || cards[i].suit == 'diamond'){
            numRed++;
        } else{
            numBlack++;
        }
    }
    alert("There are " + numRed + " red cards in the deck and " + numBlack + " black cards left.")
}