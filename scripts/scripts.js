
    
    let suit = ["spades", "diamonds", "clubs", "hearts"];
    let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let houseValue = 0;
    let playerValue = 0;
    let card1 = {};
    let card2 = {};
    let card3 = {};
    let card4 = {};
    let x = 0;
    let y = 0;
    let i = 0;
    let n = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;

    function updateValue() {
        if(card1.value == "J" || card1.value == "Q" || card1.value == "K" ) {
            card1.value = "10";
        } else if (card1.value == "A") {
            card1.value = "11";
        } 
    
        if(card2.value == "J" || card2.value == "Q" || card2.value == "K" ) {
            card2.value = "10";
        } else if (card2.value == "A") {
            card2.value = "11";
        } 
    
        if(card3.value == "J" || card3.value == "Q" || card3.value == "K" ) {
            card3.value = "10";
        } else if (card3.value == "A") {
            card3.value = "11";
        } 
    
        if(card4.value == "J" || card4.value == "Q" || card4.value == "K" ) {
            card4.value = "10";
        } else if (card4.value == "A") {
            card4.value = "11";
        } 
    
        houseValue = parseInt(card1.value) + parseInt(card2.value);
        playerValue = parseInt(card3.value) + parseInt(card4.value);
        document.getElementById("value1").innerHTML= "Value: " + houseValue;
        document.getElementById("value2").innerHTML= "Value: " + playerValue;

    }

    function hit() {

    }

    function checkValue() {

    }

    function shuffle() {
        houseHand();
        playerHand();
        updateValue();
    }

    function houseHand() {
        x = Math.floor(Math.random() * 4);
        y = Math.floor(Math.random() * 13);
        card1 = {suit: suit[x], value: value[y]};

        if(card1.suit == "spades") {
            if(card1.value == "A") {
                document.getElementById("redBack").src="images/AS.png";
            }
            if(card1.value == "2") {
                document.getElementById("redBack").src="images/2S.png";
            }
            if(card1.value == "3") {
                document.getElementById("redBack").src="images/3S.png";
            }
            if(card1.value == "4") {
                document.getElementById("redBack").src="images/4S.png";
            }
            if(card1.value == "5") {
                document.getElementById("redBack").src="images/5S.png";
            }
            if(card1.value == "6") {
                document.getElementById("redBack").src="images/6S.png";
            }
            if(card1.value == "7") {
                document.getElementById("redBack").src="images/7S.png";
            }
            if(card1.value == "8") {
                document.getElementById("redBack").src="images/8S.png";
            }
            if(card1.value == "9") {
                document.getElementById("redBack").src="images/9S.png";
            }
            if(card1.value == "10") {
                document.getElementById("redBack").src="images/10S.png";
            }
            if(card1.value == "J") {
                document.getElementById("redBack").src="images/JS.png";
            }
            if(card1.value == "Q") {
                document.getElementById("redBack").src="images/QS.png";
            }
            if(card1.value == "K") {
                document.getElementById("redBack").src="images/KS.png";
            }
        }

        else if(card1.suit == "clubs") {
            if(card1.value == "A") {
                document.getElementById("redBack").src="images/AC.png";
            }
            if(card1.value == "2") {
                document.getElementById("redBack").src="images/2C.png";
            }
            if(card1.value == "3") {
                document.getElementById("redBack").src="images/3C.png";
            }
            if(card1.value == "4") {
                document.getElementById("redBack").src="images/4C.png";
            }
            if(card1.value == "5") {
                document.getElementById("redBack").src="images/5C.png";
            }
            if(card1.value == "6") {
                document.getElementById("redBack").src="images/6C.png";
            }
            if(card1.value == "7") {
                document.getElementById("redBack").src="images/7C.png";
            }
            if(card1.value == "8") {
                document.getElementById("redBack").src="images/8C.png";
            }
            if(card1.value == "9") {
                document.getElementById("redBack").src="images/9C.png";
            }
            if(card1.value == "10") {
                document.getElementById("redBack").src="images/10C.png";
            }
            if(card1.value == "J") {
                document.getElementById("redBack").src="images/JC.png";
            }
            if(card1.value == "Q") {
                document.getElementById("redBack").src="images/QC.png";
            }
            if(card1.value == "K") {
                document.getElementById("redBack").src="images/KC.png";
            }
        } 

        else if(card1.suit == "diamonds") {
            if(card1.value == "A") {
                document.getElementById("redBack").src="images/AD.png";
            }
            if(card1.value == "2") {
                document.getElementById("redBack").src="images/2D.png";
            }
            if(card1.value == "3") {
                document.getElementById("redBack").src="images/3D.png";
            }
            if(card1.value == "4") {
                document.getElementById("redBack").src="images/4D.png";
            }
            if(card1.value == "5") {
                document.getElementById("redBack").src="images/5D.png";
            }
            if(card1.value == "6") {
                document.getElementById("redBack").src="images/6D.png";
            }
            if(card1.value == "7") {
                document.getElementById("redBack").src="images/7D.png";
            }
            if(card1.value == "8") {
                document.getElementById("redBack").src="images/8D.png";
            }
            if(card1.value == "9") {
                document.getElementById("redBack").src="images/9D.png";
            }
            if(card1.value == "10") {
                document.getElementById("redBack").src="images/10D.png";
            }
            if(card1.value == "J") {
                document.getElementById("redBack").src="images/JD.png";
            }
            if(card1.value == "Q") {
                document.getElementById("redBack").src="images/QD.png";
            }
            if(card1.value == "K") {
                document.getElementById("redBack").src="images/KD.png";
            }
        }

        else {
            if(card1.value == "A") {
                document.getElementById("redBack").src="images/AH.png";
            }
            if(card1.value == "2") {
                document.getElementById("redBack").src="images/2H.png";
            }
            if(card1.value == "3") {
                document.getElementById("redBack").src="images/3H.png";
            }
            if(card1.value == "4") {
                document.getElementById("redBack").src="images/4H.png";
            }
            if(card1.value == "5") {
                document.getElementById("redBack").src="images/5H.png";
            }
            if(card1.value == "6") {
                document.getElementById("redBack").src="images/6H.png";
            }
            if(card1.value == "7") {
                document.getElementById("redBack").src="images/7H.png";
            }
            if(card1.value == "8") {
                document.getElementById("redBack").src="images/8H.png";
            }
            if(card1.value == "9") {
                document.getElementById("redBack").src="images/9H.png";
            }
            if(card1.value == "10") {
                document.getElementById("redBack").src="images/10H.png";
            }
            if(card1.value == "J") {
                document.getElementById("redBack").src="images/JH.png";
            }
            if(card1.value == "Q") {
                document.getElementById("redBack").src="images/QH.png";
            }
            if(card1.value == "K") {
                document.getElementById("redBack").src="images/KH.png";
            }
        } 
        
        // house's hand card 2 
        i = Math.floor(Math.random() * 4);
        n = Math.floor(Math.random() * 13);

        while(i == x && n == y) {
            i = Math.floor(Math.random() * 4);
            n = Math.floor(Math.random() * 13);
        } 
        card2 = {suit: suit[i], value: value[n]};

        if(card2.suit == "spades") {
            if(card2.value == "A") {
                document.getElementById("redBack2").src="images/AS.png";
            }
            if(card2.value == "2") {
                document.getElementById("redBack2").src="images/2S.png";
            }
            if(card2.value == "3") {
                document.getElementById("redBack2").src="images/3S.png";
            }
            if(card2.value == "4") {
                document.getElementById("redBack2").src="images/4S.png";
            }
            if(card2.value == "5") {
                document.getElementById("redBack2").src="images/5S.png";
            }
            if(card2.value == "6") {
                document.getElementById("redBack2").src="images/6S.png";
            }
            if(card2.value == "7") {
                document.getElementById("redBack2").src="images/7S.png";
            }
            if(card2.value == "8") {
                document.getElementById("redBack2").src="images/8S.png";
            }
            if(card2.value == "9") {
                document.getElementById("redBack2").src="images/9S.png";
            }
            if(card2.value == "10") {
                document.getElementById("redBack2").src="images/10S.png";
            }
            if(card2.value == "J") {
                document.getElementById("redBack2").src="images/JS.png";
            }
            if(card2.value == "Q") {
                document.getElementById("redBack2").src="images/QS.png";
            }
            if(card2.value == "K") {
                document.getElementById("redBack2").src="images/KS.png";
            }
        }

        else if(card2.suit == "clubs") {
            if(card2.value == "A") {
                document.getElementById("redBack2").src="images/AC.png";
            }
            if(card2.value == "2") {
                document.getElementById("redBack2").src="images/2C.png";
            }
            if(card2.value == "3") {
                document.getElementById("redBack2").src="images/3C.png";
            }
            if(card2.value == "4") {
                document.getElementById("redBack2").src="images/4C.png";
            }
            if(card2.value == "5") {
                document.getElementById("redBack2").src="images/5C.png";
            }
            if(card2.value == "6") {
                document.getElementById("redBack2").src="images/6C.png";
            }
            if(card2.value == "7") {
                document.getElementById("redBack2").src="images/7C.png";
            }
            if(card2.value == "8") {
                document.getElementById("redBack2").src="images/8C.png";
            }
            if(card2.value == "9") {
                document.getElementById("redBack2").src="images/9C.png";
            }
            if(card2.value == "10") {
                document.getElementById("redBack2").src="images/10C.png";
            }
            if(card2.value == "J") {
                document.getElementById("redBack2").src="images/JC.png";
            }
            if(card2.value == "Q") {
                document.getElementById("redBack2").src="images/QC.png";
            }
            if(card2.value == "K") {
                document.getElementById("redBack2").src="images/KC.png";
            }
        } 

        else if(card2.suit == "diamonds") {
            if(card2.value == "A") {
                document.getElementById("redBack2").src="images/AD.png";
            }
            if(card2.value == "2") {
                document.getElementById("redBack2").src="images/2D.png";
            }
            if(card2.value == "3") {
                document.getElementById("redBack2").src="images/3D.png";
            }
            if(card2.value == "4") {
                document.getElementById("redBack2").src="images/4D.png";
            }
            if(card2.value == "5") {
                document.getElementById("redBack2").src="images/5D.png";
            }
            if(card2.value == "6") {
                document.getElementById("redBack2").src="images/6D.png";
            }
            if(card2.value == "7") {
                document.getElementById("redBack2").src="images/7D.png";
            }
            if(card2.value == "8") {
                document.getElementById("redBack2").src="images/8D.png";
            }
            if(card2.value == "9") {
                document.getElementById("redBack2").src="images/9D.png";
            }
            if(card2.value == "10") {
                document.getElementById("redBack2").src="images/10D.png";
            }
            if(card2.value == "J") {
                document.getElementById("redBack2").src="images/JD.png";
            }
            if(card2.value == "Q") {
                document.getElementById("redBack2").src="images/QD.png";
            }
            if(card2.value == "K") {
                document.getElementById("redBack2").src="images/KD.png";
            }
        }

        else {
            if(card2.value == "A") {
                document.getElementById("redBack2").src="images/AH.png";
            }
            if(card2.value == "2") {
                document.getElementById("redBack2").src="images/2H.png";
            }
            if(card2.value == "3") {
                document.getElementById("redBack2").src="images/3H.png";
            }
            if(card2.value == "4") {
                document.getElementById("redBack2").src="images/4H.png";
            }
            if(card2.value == "5") {
                document.getElementById("redBack2").src="images/5H.png";
            }
            if(card2.value == "6") {
                document.getElementById("redBack2").src="images/6H.png";
            }
            if(card2.value == "7") {
                document.getElementById("redBack2").src="images/7H.png";
            }
            if(card2.value == "8") {
                document.getElementById("redBack2").src="images/8H.png";
            }
            if(card2.value == "9") {
                document.getElementById("redBack2").src="images/9H.png";
            }
            if(card2.value == "10") {
                document.getElementById("redBack2").src="images/10H.png";
            }
            if(card2.value == "J") {
                document.getElementById("redBack2").src="images/JH.png";
            }
            if(card2.value == "Q") {
                document.getElementById("redBack2").src="images/QH.png";
            }
            if(card2.value == "K") {
                document.getElementById("redBack2").src="images/KH.png";
            }
        } 
    }

    function playerHand() {
        a = Math.floor(Math.random() * 4);
        b = Math.floor(Math.random() * 13);

        while(a == x && b == y || a == i && b == n) {
            a = Math.floor(Math.random() * 4);
            b = Math.floor(Math.random() * 13);
        }
        card3 = {suit: suit[a], value: value[b]};

        if(card3.suit == "spades") {
            if(card3.value == "A") {
                document.getElementById("grayBack").src="images/AS.png";
            }
            if(card3.value == "2") {
                document.getElementById("grayBack").src="images/2S.png";
            }
            if(card3.value == "3") {
                document.getElementById("grayBack").src="images/3S.png";
            }
            if(card3.value == "4") {
                document.getElementById("grayBack").src="images/4S.png";
            }
            if(card3.value == "5") {
                document.getElementById("grayBack").src="images/5S.png";
            }
            if(card3.value == "6") {
                document.getElementById("grayBack").src="images/6S.png";
            }
            if(card3.value == "7") {
                document.getElementById("grayBack").src="images/7S.png";
            }
            if(card3.value == "8") {
                document.getElementById("grayBack").src="images/8S.png";
            }
            if(card3.value == "9") {
                document.getElementById("grayBack").src="images/9S.png";
            }
            if(card3.value == "10") {
                document.getElementById("grayBack").src="images/10S.png";
            }
            if(card3.value == "J") {
                document.getElementById("grayBack").src="images/JS.png";
            }
            if(card3.value == "Q") {
                document.getElementById("grayBack").src="images/QS.png";
            }
            if(card3.value == "K") {
                document.getElementById("grayBack").src="images/KS.png";
            }
        }

        else if(card3.suit == "clubs") {
            if(card3.value == "A") {
                document.getElementById("grayBack").src="images/AC.png";
            }
            if(card3.value == "2") {
                document.getElementById("grayBack").src="images/2C.png";
            }
            if(card3.value == "3") {
                document.getElementById("grayBack").src="images/3C.png";
            }
            if(card3.value == "4") {
                document.getElementById("grayBack").src="images/4C.png";
            }
            if(card3.value == "5") {
                document.getElementById("grayBack").src="images/5C.png";
            }
            if(card3.value == "6") {
                document.getElementById("grayBack").src="images/6C.png";
            }
            if(card3.value == "7") {
                document.getElementById("grayBack").src="images/7C.png";
            }
            if(card3.value == "8") {
                document.getElementById("grayBack").src="images/8C.png";
            }
            if(card3.value == "9") {
                document.getElementById("grayBack").src="images/9C.png";
            }
            if(card3.value == "10") {
                document.getElementById("grayBack").src="images/10C.png";
            }
            if(card3.value == "J") {
                document.getElementById("grayBack").src="images/JC.png";
            }
            if(card3.value == "Q") {
                document.getElementById("grayBack").src="images/QC.png";
            }
            if(card3.value == "K") {
                document.getElementById("grayBack").src="images/KC.png";
            }
        } 

        else if(card3.suit == "diamonds") {
            if(card3.value == "A") {
                document.getElementById("grayBack").src="images/AD.png";
            }
            if(card3.value == "2") {
                document.getElementById("grayBack").src="images/2D.png";
            }
            if(card3.value == "3") {
                document.getElementById("grayBack").src="images/3D.png";
            }
            if(card3.value == "4") {
                document.getElementById("grayBack").src="images/4D.png";
            }
            if(card3.value == "5") {
                document.getElementById("grayBack").src="images/5D.png";
            }
            if(card3.value == "6") {
                document.getElementById("grayBack").src="images/6D.png";
            }
            if(card3.value == "7") {
                document.getElementById("grayBack").src="images/7D.png";
            }
            if(card3.value == "8") {
                document.getElementById("grayBack").src="images/8D.png";
            }
            if(card3.value == "9") {
                document.getElementById("grayBack").src="images/9D.png";
            }
            if(card3.value == "10") {
                document.getElementById("grayBack").src="images/10D.png";
            }
            if(card3.value == "J") {
                document.getElementById("grayBack").src="images/JD.png";
            }
            if(card3.value == "Q") {
                document.getElementById("grayBack").src="images/QD.png";
            }
            if(card3.value == "K") {
                document.getElementById("grayBack").src="images/KD.png";
            }
        }

        else {
            if(card3.value == "A") {
                document.getElementById("grayBack").src="images/AH.png";
            }
            if(card3.value == "2") {
                document.getElementById("grayBack").src="images/2H.png";
            }
            if(card3.value == "3") {
                document.getElementById("grayBack").src="images/3H.png";
            }
            if(card3.value == "4") {
                document.getElementById("grayBack").src="images/4H.png";
            }
            if(card3.value == "5") {
                document.getElementById("grayBack").src="images/5H.png";
            }
            if(card3.value == "6") {
                document.getElementById("grayBack").src="images/6H.png";
            }
            if(card3.value == "7") {
                document.getElementById("grayBack").src="images/7H.png";
            }
            if(card3.value == "8") {
                document.getElementById("grayBack").src="images/8H.png";
            }
            if(card3.value == "9") {
                document.getElementById("grayBack").src="images/9H.png";
            }
            if(card3.value == "10") {
                document.getElementById("grayBack").src="images/10H.png";
            }
            if(card3.value == "J") {
                document.getElementById("grayBack").src="images/JH.png";
            }
            if(card3.value == "Q") {
                document.getElementById("grayBack").src="images/QH.png";
            }
            if(card3.value == "K") {
                document.getElementById("grayBack").src="images/KH.png";
            }
        } 

        c = Math.floor(Math.random() * 4);
        d = Math.floor(Math.random() * 13);
       
        while(c == x && d == y || c == i && d == n || c == a && d == b) {
            c = Math.floor(Math.random() * 4);
            d = Math.floor(Math.random() * 13);
        }
        card4 = {suit: suit[c], value: value[d]};

        if(card4.suit == "spades") {
            if(card4.value == "A") {
                document.getElementById("grayBack2").src="images/AS.png";
            }
            if(card4.value == "2") {
                document.getElementById("grayBack2").src="images/2S.png";
            }
            if(card4.value == "3") {
                document.getElementById("grayBack2").src="images/3S.png";
            }
            if(card4.value == "4") {
                document.getElementById("grayBack2").src="images/4S.png";
            }
            if(card4.value == "5") {
                document.getElementById("grayBack2").src="images/5S.png";
            }
            if(card4.value == "6") {
                document.getElementById("grayBack2").src="images/6S.png";
            }
            if(card4.value == "7") {
                document.getElementById("grayBack2").src="images/7S.png";
            }
            if(card4.value == "8") {
                document.getElementById("grayBack2").src="images/8S.png";
            }
            if(card4.value == "9") {
                document.getElementById("grayBack2").src="images/9S.png";
            }
            if(card4.value == "10") {
                document.getElementById("grayBack2").src="images/10S.png";
            }
            if(card4.value == "J") {
                document.getElementById("grayBack2").src="images/JS.png";
            }
            if(card4.value == "Q") {
                document.getElementById("grayBack2").src="images/QS.png";
            }
            if(card4.value == "K") {
                document.getElementById("grayBack2").src="images/KS.png";
            }
        }

        else if(card4.suit == "clubs") {
            if(card4.value == "A") {
                document.getElementById("grayBack2").src="images/AC.png";
            }
            if(card4.value == "2") {
                document.getElementById("grayBack2").src="images/2C.png";
            }
            if(card4.value == "3") {
                document.getElementById("grayBack2").src="images/3C.png";
            }
            if(card4.value == "4") {
                document.getElementById("grayBack2").src="images/4C.png";
            }
            if(card4.value == "5") {
                document.getElementById("grayBack2").src="images/5C.png";
            }
            if(card4.value == "6") {
                document.getElementById("grayBack2").src="images/6C.png";
            }
            if(card4.value == "7") {
                document.getElementById("grayBack2").src="images/7C.png";
            }
            if(card4.value == "8") {
                document.getElementById("grayBack2").src="images/8C.png";
            }
            if(card4.value == "9") {
                document.getElementById("grayBack2").src="images/9C.png";
            }
            if(card4.value == "10") {
                document.getElementById("grayBack2").src="images/10C.png";
            }
            if(card4.value == "J") {
                document.getElementById("grayBack2").src="images/JC.png";
            }
            if(card4.value == "Q") {
                document.getElementById("grayBack2").src="images/QC.png";
            }
            if(card4.value == "K") {
                document.getElementById("grayBack2").src="images/KC.png";
            }
        } 

        else if(card4.suit == "diamonds") {
            if(card4.value == "A") {
                document.getElementById("grayBack2").src="images/AD.png";
            }
            if(card4.value == "2") {
                document.getElementById("grayBack2").src="images/2D.png";
            }
            if(card4.value == "3") {
                document.getElementById("grayBack2").src="images/3D.png";
            }
            if(card4.value == "4") {
                document.getElementById("grayBack2").src="images/4D.png";
            }
            if(card4.value == "5") {
                document.getElementById("grayBack2").src="images/5D.png";
            }
            if(card4.value == "6") {
                document.getElementById("grayBack2").src="images/6D.png";
            }
            if(card4.value == "7") {
                document.getElementById("grayBack2").src="images/7D.png";
            }
            if(card4.value == "8") {
                document.getElementById("grayBack2").src="images/8D.png";
            }
            if(card4.value == "9") {
                document.getElementById("grayBack2").src="images/9D.png";
            }
            if(card4.value == "10") {
                document.getElementById("grayBack2").src="images/10D.png";
            }
            if(card4.value == "J") {
                document.getElementById("grayBack2").src="images/JD.png";
            }
            if(card4.value == "Q") {
                document.getElementById("grayBack2").src="images/QD.png";
            }
            if(card4.value == "K") {
                document.getElementById("grayBack2").src="images/KD.png";
            }
        }

        else {
            if(card4.value == "A") {
                document.getElementById("grayBack2").src="images/AH.png";
            }
            if(card4.value == "2") {
                document.getElementById("grayBack2").src="images/2H.png";
            }
            if(card4.value == "3") {
                document.getElementById("grayBack2").src="images/3H.png";
            }
            if(card4.value == "4") {
                document.getElementById("grayBack2").src="images/4H.png";
            }
            if(card4.value == "5") {
                document.getElementById("grayBack2").src="images/5H.png";
            }
            if(card4.value == "6") {
                document.getElementById("grayBack2").src="images/6H.png";
            }
            if(card4.value == "7") {
                document.getElementById("grayBack2").src="images/7H.png";
            }
            if(card4.value == "8") {
                document.getElementById("grayBack2").src="images/8H.png";
            }
            if(card4.value == "9") {
                document.getElementById("grayBack2").src="images/9H.png";
            }
            if(card4.value == "10") {
                document.getElementById("grayBack2").src="images/10H.png";
            }
            if(card4.value == "J") {
                document.getElementById("grayBack2").src="images/JH.png";
            }
            if(card4.value == "Q") {
                document.getElementById("grayBack2").src="images/QH.png";
            }
            if(card4.value == "K") {
                document.getElementById("grayBack2").src="images/KH.png";
            }
        } 
    }





    