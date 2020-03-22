/**
 * Global Variables
 */
let suit = ["S", "D", "C", "H"];
let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let playerHand = [];
let houseHand = [];
let deck = [];
let pool = 0;
let score = 100;

let scorebox = document.getElementById("score");
let poolbox = document.getElementById("pool");

/**
 *  Button Functions
 */
let bet10 = document.getElementById("bet10");
bet10.onclick = playerBet10;

/**
 * Card Constructor
 */
function card(value, suit, status){
    this.value = value;
    this.suit = suit;
    this.status = status;
    
    if(this.status == "faceUp"){
        this.imgsrc = "images/" + this.value + this.suit + ".png";
        }
    else{
        this.imgsrc = "images/red_back.png";
    }
}

/**
 * Player Object Constructor
 * User and House will be made using this
 */
function player_obj(hand){
    this.hand = hand;
    this.draw = drawCard;
}


/**
 * Dynamically generate array of cards
 */
function generateDeck(){
    for(let i=0; i<suit.length; i++){
        for(let j=0; j<value.length; j++){
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
        console.log(j);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}



/**
 * Draw card from deck
 * Status is either faceUp or faceDown
 */
function drawCard(){
    let topCard = deck.pop();
    this.hand.push(topCard);  
}

/**
 * Player bets 10
 */
function playerBet10(){
    score -= 10;
    pool += 10;
    scorebox.innerHTML = score;
    poolbox.innerHTML = pool;
}


/**
 * Start Game
 */
function play(){

    /**
     * Player places bet
     */
    player.bet(n);

    /**
     * Generate and shuffle Deck
     */

    let deck = generateDeck();
    shuffleDeck(deck);

    /**
     * Player draws 2 cards and house draws 2 cards
     */
    player.drawCard("faceUp");
    player.drawCard("faceUp");

    house.drawCard("faceUp");
    house.drawCard("faceDown");

    /**
     * Natural conditionals
     * If player hits 21 off the draw, they win 1.5x their bet
     * If house hits 21 off the draw, player loses
     */
    if(player.value == 21){

    }
    else if(house.value == 21){

    }

    /**
     * User either clicks "Hit" or "Stay"
     * Create Hit and Stay Buttons
     */

    /**
     * Once user hits stay, house draws till value is > 17
     */


}



/**
 * Testing
 */

let player = new player_obj(playerHand);
let house = new player_obj(houseHand);


generateDeck();
shuffleDeck(deck);
console.log(deck);

player.draw();
console.log(playerHand);
console.log(deck);

scorebox.innerHTML = score;
poolbox.innerHTML = pool;

let card1 = document.createElement("img");
card1.src = playerHand[0].imgsrc;
document.body.appendChild(card1);



//card4.src = "images/red_back.png";

