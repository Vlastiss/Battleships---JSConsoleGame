/* 
BattleShip game, Beginning of the game you are pressented with a game board (grid) you choose a location of your 3 ships.
Game begins.
You have 10 missiles at the start of the game.
You try to guess location of enemy ships. if you hit an enemy ship you get a point.
Player who hits first all 3 ships wins.
*/


//GameGrid
let grid = {
    "r": [0, 1, 2, 3, 4],
    "-": "-------------",
    "A": [0, 0, 0, 0, 0],
    "B": [0, 0, 0, 0, 0],
    "C": [0, 0, 0, 0, 0],
    "D": [0, 0, 0, 0, 0],
    "E": [0, 0, 0, 0, 0]
};
//User input variable enabler
const prompt = require("prompt-sync")();

let numOfFriendlyShips = 3;
let numOfEnemyShips = 3;

let friendlyMissiles = 10;
let enemyMissiles = 10;

//friendly ship locations
let shipPosition1 = "";
let shipPosition2 = "";
let shipPosition3 = "";


//random Coordinates for enemy ships generator
const randomCoordinates = () => {
    //random letter generator
    const letterPositions = ["A", "B", "C", "D", "E"];
    let randomLetterNumber = Math.floor(Math.random() * letterPositions.length);
    const letter = letterPositions[randomLetterNumber];

    const randomNumber = Math.floor(Math.random() * letterPositions.length)

    const coordinates = letter + randomNumber;
    return coordinates
}
let enemyShipCoordinate1 = randomCoordinates();
let enemyShipCoordinate2 = randomCoordinates();
let enemyShipCoordinate3 = randomCoordinates();

//friendly ship selection logic
const friendlyShipSelection = () => {

    //Game starting messages
    console.log("Welcome to the battleship!")
    console.log(grid)
    console.log()

    let condition = false;
    while (!condition) {
        shipPosition1 = prompt("Please enter 1.position of your ship (A2, C3, ...): ").toUpperCase();
        if (!((shipPosition1[0] === "A" || shipPosition1[0] === "a" ||
            shipPosition1[0] === "B" || shipPosition1[0] === "b" ||
            shipPosition1[0] === "C" || shipPosition1[0] === "c" ||
            shipPosition1[0] === "D" || shipPosition1[0] === "d" ||
            shipPosition1[0] === "E" || shipPosition1[0] === "e")
            &&
            (shipPosition1[1] === "0" || shipPosition1[1] === "1" ||
                shipPosition1[1] === "2" || shipPosition1[1] === "3" ||
                shipPosition1[1] === "4"))) {
            console.log("Wrong location. Try again.");
        } else {
            grid[shipPosition1[0]][shipPosition1[1]] = "X";
            condition = true;
        }
    }

    condition = false;
    while (!condition) {
        shipPosition2 = prompt("Please enter 2.position of your ship (A2, C3, ...): ").toUpperCase();
        if (!((shipPosition2[0] === "A" || shipPosition2[0] === "a" ||
            shipPosition2[0] === "B" || shipPosition2[0] === "b" ||
            shipPosition2[0] === "C" || shipPosition2[0] === "c" ||
            shipPosition2[0] === "D" || shipPosition2[0] === "d" ||
            shipPosition2[0] === "E" || shipPosition2[0] === "e")
            &&
            (shipPosition2[1] === "0" || shipPosition2[1] === "1" ||
                shipPosition2[1] === "2" || shipPosition2[1] === "3" ||
                shipPosition2[1] === "4"))) {
            console.log("Wrong location. Try again.");
        } else if (shipPosition1 == shipPosition2) {
            console.log("Location already in use")
        } else {
            grid[shipPosition2[0]][shipPosition2[1]] = "X";
            condition = true;
        }
    }

    condition = false;
    while (!condition) {
        shipPosition3 = prompt("Please enter 3.position of your ship (A2, C3, ...): ").toUpperCase();
        if (!((shipPosition3[0] === "A" || shipPosition3[0] === "a" ||
            shipPosition3[0] === "B" || shipPosition3[0] === "b" ||
            shipPosition3[0] === "C" || shipPosition3[0] === "c" ||
            shipPosition3[0] === "D" || shipPosition3[0] === "d" ||
            shipPosition3[0] === "E" || shipPosition3[0] === "e")
            &&
            (shipPosition3[1] === "0" || shipPosition3[1] === "1" ||
                shipPosition3[1] === "2" || shipPosition3[1] === "3" ||
                shipPosition3[1] === "4"))) {
            console.log("Wrong location. Try again.");
        } else if (shipPosition2 == shipPosition3 || shipPosition3 == shipPosition1) {
            console.log("Location already in use")
        } else {
            grid[shipPosition3[0]][shipPosition3[1]] = "X";
            condition = true;
        }
    }
    // console.log(grid)
}

//my turn selecting enemy ship
const myTurn = () => {
    console.log("Shoot down the enemy ship!")
    enemyShipPosition1 = prompt("Where is the enemy ship hiding, Captain? (A0, C3, ...): ").toUpperCase();

    if (!((enemyShipPosition1[0] === "A" || enemyShipPosition1[0] === "a" ||
        enemyShipPosition1[0] === "B" || enemyShipPosition1[0] === "b" ||
        enemyShipPosition1[0] === "C" || enemyShipPosition1[0] === "c" ||
        enemyShipPosition1[0] === "D" || enemyShipPosition1[0] === "d" ||
        enemyShipPosition1[0] === "E" || enemyShipPosition1[0] === "e")
        &&
        (enemyShipPosition1[1] === "0" || enemyShipPosition1[1] === "1" ||
            enemyShipPosition1[1] === "2" || enemyShipPosition1[1] === "3" ||
            enemyShipPosition1[1] === "4"))) {
        console.log("Invalid coordinates.");
    } else if (enemyShipPosition1 == enemyShipCoordinate1 || enemyShipPosition1 == enemyShipCoordinate2 || enemyShipPosition1 == enemyShipCoordinate3) {
        console.log("You have shooted down their ship!")
        numOfEnemyShips--;
        friendlyMissiles--;
        console.log(`${numOfEnemyShips} more ship/s to go!`)
    } else {
        console.log("You missed!")
        friendlyMissiles--;
    }
}

//TODO need to figure out a way how delete the ships from the grid once they're shoted down

//matching if enemy shots hit my ships
const enemyTurn = () => {
    console.log("Enemy turn!")
    const randomLocation = randomCoordinates()
    if (randomLocation == shipPosition1) {

    } else if (randomLocation == shipPosition2) {

    } else if (randomLocation == shipPosition3) {

    }

}


// friendlyShipSelection();

// myTurn();




