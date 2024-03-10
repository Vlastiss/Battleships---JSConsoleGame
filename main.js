/* 
BattleShip game, Beginning of the game you are pressented with a game board (grid) you choose a location of your 3 ships.
Game begins.
You have 10 missiles at the start of the game.
You try to guess location of enemy ships. if you hit an enemy ship you get a point.
Player who hits first all 3 ships wins.
*/

//User input variable enabler
const prompt = require("prompt-sync")();

const numOfShips = 3;
const missiles = 10;

//ship locations
let shipPosition1 = "";
let shipPosition2 = "";
let shipPosition3 = "";


//random Coordinates generator
const randomCoordinates = () => {
    //random letter generator
    const letterPositions = ["A", "B", "C", "D", "E"];
    let randomLetterNumber = Math.floor(Math.random() * letterPositions.length);
    const letter = letterPositions[randomLetterNumber];

    const randomNumber = Math.floor(Math.random() * letterPositions.length)

    const coordinates = letter + randomNumber;
    return coordinates
}
let enemeyShipCoordinate1 = randomCoordinates()
let enemeyShipCoordinate2 = randomCoordinates()
let enemeyShipCoordinate3 = randomCoordinates()

//boat selection logic
const friendlyBoatSelection = () => {

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

const enemyBoatSelection = () => {
    enemeyShipPosition1 = prompt("Where is the enemy ship Captain? (A2, C3, ...): ").toUpperCase();
    if (!((enemeyShipPosition1[0] === "A" || enemeyShipPosition1[0] === "a" ||
        enemeyShipPosition1[0] === "B" || enemeyShipPosition1[0] === "b" ||
        enemeyShipPosition1[0] === "C" || enemeyShipPosition1[0] === "c" ||
        enemeyShipPosition1[0] === "D" || enemeyShipPosition1[0] === "d" ||
        enemeyShipPosition1[0] === "E" || enemeyShipPosition1[0] === "e")
        &&
        (enemeyShipPosition1[1] === "0" || enemeyShipPosition1[1] === "1" ||
            enemeyShipPosition1[1] === "2" || enemeyShipPosition1[1] === "3" ||
            enemeyShipPosition1[1] === "4"))) {
        console.log("Invalid coordinates.");
    } else if (condition) {
        
    }
}

// friendlyBoatSelection();

// enemyBoatSelection();





