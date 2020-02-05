class Card{
    constructor(suit, value, name){
        this.suit = suit;
        this.value = value;
        this.name = name;
    }
}

s1 = new Card("spade", 1, 'AS')
s2 = new Card("spade", 2, '2S')
s3 = new Card("spade", 3, '3S')
s4 = new Card("spade", 4, '4S')
s5 = new Card("spade", 5, '5S')
s6 = new Card("spade", 6, '6S')
s7 = new Card("spade", 7, '7S')
s8 = new Card("spade", 8, '8S')
s9 = new Card("spade", 9, '9S')
s10 = new Card("spade", 10, '10S')
s11 = new Card("spade", 11, 'JS')
s12 = new Card("spade", 12, 'QS')
s13 = new Card("spade", 13, 'KS')

c1 = new Card("club", 1, 'AC')
c2 = new Card("club", 2, '2C')
c3 = new Card("club", 3, '3C')
c4 = new Card("club", 4, '4C')
c5 = new Card("club", 5, '5C')
c6 = new Card("club", 6, '6C')
c7 = new Card("club", 7, '7C')
c8 = new Card("club", 8, '8C')
c9 = new Card("club", 9, '9C')
c10 = new Card("club", 10, '10C')
c11 = new Card("club", 11, 'JC')
c12 = new Card("club", 12, 'QC')
c13 = new Card("club", 13, 'KC')

h1 = new Card("heart", 1, 'AH')
h2 = new Card("heart", 2, '2H')
h3 = new Card("heart", 3, '3H')
h4 = new Card("heart", 4, '4H')
h5 = new Card("heart", 5, '5H')
h6 = new Card("heart", 6, '6H')
h7 = new Card("heart", 7, '7H')
h8 = new Card("heart", 8, '8H')
h9 = new Card("heart", 9, '9H')
h10 = new Card("heart", 10, '10H')
h11 = new Card("heart", 11, 'JH')
h12 = new Card("heart", 12, 'QH')
h13 = new Card("heart", 13, 'KH')

d1 = new Card("diamond", 1, 'AD')
d2 = new Card("diamond", 2, '2D')
d3 = new Card("diamond", 3, '3D')
d4 = new Card("diamond", 4, '4D')
d5 = new Card("diamond", 5, '5D')
d6 = new Card("diamond", 6, '6D')
d7 = new Card("diamond", 7, '7D')
d8 = new Card("diamond", 8, '8D')
d9 = new Card("diamond", 9, '9D')
d10 = new Card("diamond", 10, '10D')
d11 = new Card("diamond", 11, 'JD')
d12 = new Card("diamond", 12, 'QD')
d13 = new Card("diamond", 13, 'KD')

let cards = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,
            h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,
            c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,
            d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,]

let usedCards = []