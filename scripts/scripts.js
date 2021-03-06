/**
 * Global Variables
 */
let suit = ["S", "D", "C", "H"];
let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let playerHand = [];
let houseHand = [];
let deck = [];
let pool = 0;
let score = 1000;
let player = new player_obj(playerHand);
let house = new player_obj(houseHand);
let scorebox = document.getElementById("score");
let poolbox = document.getElementById("pool");
let hitButton = document.getElementById("hit");
let stayButton = document.getElementById("stay");
let dealButton = document.getElementById("deal");
let bet10 = document.getElementById("bet10");
let bet50 = document.getElementById("bet50");
let bet100 = document.getElementById("bet100");
let quitButton = document.getElementById("quit");

/**
 *  Button Functions
 */
dealButton.disabled = true;
hitButton.disabled = true;
stayButton.disabled = true;
quitButton.disabled = true;
bet10.onclick = playerBet10;
bet50.onclick = playerBet50;
bet100.onclick = playerBet100;
hitButton.onclick = hit;
stayButton.onclick = stay;
dealButton.onclick = deal;
quitButton.onclick = quit;

////////////////////// Constructors //////////////////////

/**
 * Card Constructor
 */
function card(value, suit, status) {
    this.value = value;
    this.suit = suit;
    this.status = status;

    if (this.status == "faceUp") {
        this.imgsrc = "images/" + this.value + "_" + this.suit + ".png";
    } else {
        this.imgsrc = "images/red_back.png";
    }

    this.crd = document.createElement("img");
    this.crd.setAttribute("class", "image");
    this.crd.style.width = "15vmin"
    this.crd.style.position = "absolute";
    this.crd.src = this.imgsrc;
    this.crd.style.margin = "2px";

    this.setStatus = function (status) {
        if (status == "faceUp") {
            this.crd.src = "images/" + this.value + "_" + this.suit + ".png";
        } else {
            this.crd.src = "images/red_back.png";
        }
    }
}

/**
 * Player Object Constructor
 * User and House will be made using this
 */
function player_obj(hand) {
    this.hand = hand;
    this.draw = drawCard;
    this.reposition = positionPlayer;
    this.sum = sumOfCards;
    this.sum21 = sum21;
}

////////////////////// Player Functions //////////////////////

/**
 * Draw card from deck
 * Status is either faceUp or faceDown
 */
function drawCard() {
    let topCard = deck.pop();
    this.hand.push(topCard);
    //No parameter for setStatus sets to facedown
    this.setStatus = function (status) {
        if (status == "faceUp") {
            topCard.src = "images/" + topCard.value + "_" + topCard.suit + ".png";
        } else {
            topCard.crd.src = "images/red_back.png";
        }
    }
    document.body.appendChild(topCard.crd);
}

/**
 * Position Cards
 */
function positionPlayer(player) {
    let hand = this.hand;
    for (let i = 0; i < hand.length; i++) {
        if (player == "player") {
            hand[i].crd.style.bottom = "10%";
        } else {
            hand[i].crd.style.bottom = "45%";
        }
        hand[i].crd.style.left = 30 + (15 * i) + "vw";
        hand[i].crd.style.left = 30 + (15 * i) + "vw";
    }
}

/**
 * Sum of cards in hand
 */
function sumOfCards() {
    let hand = this.hand;
    let sum = 0;
    for (let i = 0; i < hand.length; i++) {
        if (hand[i].value == "J" || hand[i].value == "K" || hand[i].value == "Q") {
            hand[i].value = 10;
        }
        if (hand[i].value == "A") {
            hand[i].value = 11;
        }
        sum = sum + parseInt(hand[i].value);
    }

    //Set Aces to 1 if sum > 21
    if (sum > 21) {
        sum = 0;
        for (let j = 0; j < hand.length; j++) {
            if (hand[j].value == "A" || hand[j].value == 11) {
                hand[j].value = 1;
            }
            sum = sum + parseInt(hand[j].value);
        }
    }
    return sum;
}

/**
 * Check 21
 */
function sum21() {
    let sum = this.sum();
    if (sum == 21) {
        return true;
    }
    return false;
}

////////////////////// Game Functions //////////////////////

/**
 * Dynamically generate array of cards
 */
function generateDeck() {
    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < value.length; j++) {
            let crd = new card(value[j], suit[i], "faceUp");
            deck.push(crd);
        }
    }
}

/**
 * Shuffle Deck
 */
function shuffleDeck(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let j = Math.floor(Math.random() * (52));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

/**
 * out of betting money
 */
function bankrupt() {
    window.alert("Bankrupt! You lose.");
    toggleEnd();
    score = 1000;
    pool = 0;
    scorebox.innerHTML = "YOUR BANK: " +  score;
    poolbox.innerHTML = "POOL: " + pool;

}

/**
 * Toggle buttons after game ends.
 * Disable hit & stay & quit, enable betting buttons & deal
 */
function toggleEnd() {
    hitButton.disabled = true;
    stayButton.disabled = true;
    quitButton.disabled = false;
    dealButton.disabled = true;
    bet10.disabled = false;
    bet50.disabled = false;
    bet100.disabled = false;
}

/**
 * Toggle buttons at game start.
 * Enable hit & stay, quit, disable betting buttons & deal
 */
function toggleStart() {
    hitButton.disabled = false;
    stayButton.disabled = false;
    quitButton.disabled = true;
    dealButton.disabled = true;
    bet10.disabled = true;
    bet50.disabled = true;
    bet100.disabled = true;
}

function enableDealBtn() {
    dealButton.disabled = false;
}

/** 
 * check player score to determine how much they can bet
 */
function checkScore() {
    if (score < 10) {
        bet10.disabled = true;
        bet50.disabled = true;
        bet100.disabled = true;
    } else {
        bet10.disabled = false;
    }

    if (score < 50) {
        bet50.disabled = true;
        bet100.disabled = true;
    } else {
        bet50.disabled = false;
    }

    if (score < 100) {
        bet100.disabled = true;
    } else {
        bet100.disabled = false;
    }
}
////////////////////// Buttons Functions //////////////////////
/**
 * Player bets 10
 */
function playerBet10() {
    score -= 10;
    pool += 10;
    scorebox.innerHTML = "YOUR BANK: " +  score;
    poolbox.innerHTML = "POOL: " + pool;
    checkScore();
    bet10.addEventListener("click", enableDealBtn());
}

/**
 * Player bets 50
 */
function playerBet50() {
    score -= 50;
    pool += 50;
    scorebox.innerHTML = "YOUR BANK: " +  score;
    poolbox.innerHTML = "POOL: " + pool;
    checkScore();
    bet50.addEventListener("click", enableDealBtn());
}

/**
 * Player bets 100
 */
function playerBet100() {
    score -= 100;
    pool += 100;
    scorebox.innerHTML = "YOUR BANK: " +  score;
    poolbox.innerHTML = "POOL: " + pool;
    checkScore();
    bet100.addEventListener("click", enableDealBtn());
}

/**
 * Player Hit
 */
function hit() {
    player.draw();
    player.reposition("player");
    let sum = player.sum();
    if (player.sum21()) {
        score += 1.5 * pool;
        scorebox.innerHTML = "YOUR BANK: " + score;
        pool = 0;
        poolbox.innerHTML = "POOL: " + pool;
        window.alert("21! You win");
        toggleEnd();
    } else if (sum > 21) {
        //endround
        house.hand[0].setStatus("faceUp");
        pool = 0;
        poolbox.innerHTML = "POOL: " + pool;
        window.alert("Bust! You lose");
        toggleEnd();
        checkScore();
    }
    if (score < 10){
        bankrupt();
    } 
}

/**
 * Player Stay
 */
function stay() {
    house.hand[0].setStatus("faceUp");
    while (house.sum() < 18) {
        house.draw();
        house.reposition();
    }
    if (house.sum21()) {
        //endround
        pool = 0;
        poolbox.innerHTML = "POOL: " + pool;
        window.alert("House wins");        
        toggleEnd();
    } else if (house.sum() > 21 || player.sum() > house.sum()) {
        //player wins
        score += 2 * pool;
        scorebox.innerHTML = "YOUR BANK: " + score;
        pool = 0;
        poolbox.innerHTML = "POOL: " + pool;
        window.alert("You win");
        toggleEnd();
    } else if (house.sum() == player.sum()) {
        //draw
        score += pool;
        scorebox.innerHTML = "YOUR BANK: " + score;
        pool = 0;
        poolbox.innerHTML = "POOL: " + pool;
        window.alert("Draw");
        toggleEnd();
    } else if (player.sum() < house.sum()) {
        //housewins
        pool = 0;
        poolbox.innerHTML = "POOL: " + pool;
        window.alert("House wins");
        toggleEnd();
    }
    checkScore();
    if (score <= 0){
        bankrupt();
    } 
}

/**
 * Deal
 */
function deal(){
    writeScore(score);//refer to firebase_api_BlackjackGame.js

    let cards = document.getElementsByClassName("image");
    console.log(cards);
    if (cards != null) {
        let len = cards.length;
        for (let i = len - 1; i >= 0; i--) {
            cards[i].parentNode.removeChild(cards[i]);
        }
    }
    
    //Clear deck and hands
    deck = [];
    player.hand = [];
    house.hand = [];

    //Rebuild deck and draw
    generateDeck();
    shuffleDeck(deck);
    house.reposition();
    player.reposition("player");
    player.draw();
    player.draw();
    house.draw();
    house.draw();
    house.hand[0].setStatus("faceDown");
    house.reposition();
    player.reposition("player");
    toggleStart();

    //Draw 21
    if (player.sum21()) {
        score += 1.5 * pool;
        scorebox.innerHTML = "YOUR BANK: " + score;
        pool = 0;
        poolbox.innerHTML = "POOL: " + pool;
        window.alert("21! You win");
        toggleEnd();

    }

}

function quit() {
    window.alert(document.getElementById("changeName").value + " | Your bank: " + score);
    toggleEnd();
    score = 1000;
    pool = 0;
    scorebox.innerHTML = "YOUR BANK: " +  score;
    poolbox.innerHTML = "POOL: " + pool;

    let cards = document.getElementsByClassName("image");
    console.log(cards);
    if (cards != null) {
        let len = cards.length;
        for (let i = len - 1; i >= 0; i--) {
            cards[i].parentNode.removeChild(cards[i]);
        }
    }
    
    //Clear deck and hands
    deck = [];
    player.hand = [];
    house.hand = [];
}
