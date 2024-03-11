/* 
BattleShips!
-Select 3 locations of your ship (A0 - E4);
-Randomly generate 3 enemy ship locations.
---while loop
    -Select a location of the enemy ship.
        if shot down:
            delete the ship from the grid
            update missiles
            display the updated grid
    -computer tries to guess location of your ship.
        if shot down:
            delete the ship from the grid
            update missiles
            display the updated grid
*/

//Game Grids
let myShipsGrid = {
    "A": [0, 0, 0, 0, 0],
    "B": [0, 0, 0, 0, 0],
    "C": [0, 0, 0, 0, 0],
    "D": [0, 0, 0, 0, 0],
    "E": [0, 0, 0, 0, 0]
};
let enemyShipsGrid = {
    "A": [0, 0, 0, 0, 0],
    "B": [0, 0, 0, 0, 0],
    "C": [0, 0, 0, 0, 0],
    "D": [0, 0, 0, 0, 0],
    "E": [0, 0, 0, 0, 0]
};
let enemyTryGrid = {
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

let turnCounter = 1;

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
    console.log()
    console.log("Welcome to the battleship!")
    console.log("This is the grid.")
    console.table(myShipsGrid)
    console.log("Time to position your ships!(Locations: A0 - E4)")
    console.log()

    let condition = false;
    while (!condition) {
        shipPosition1 = prompt("Please enter 1.position of your ship: ").toUpperCase();
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
            enemyTryGrid[shipPosition1[0]][shipPosition1[1]] = "X";
            condition = true;
        }
    }

    condition = false;
    while (!condition) {
        shipPosition2 = prompt("Please enter 2.position of your ship: ").toUpperCase();
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
            enemyTryGrid[shipPosition2[0]][shipPosition2[1]] = "X";
            condition = true;
        }
    }

    condition = false;
    while (!condition) {
        shipPosition3 = prompt("Please enter 3.position of your ship: ").toUpperCase();
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
            enemyTryGrid[shipPosition3[0]][shipPosition3[1]] = "X";
            condition = true;
        }
    }
    // console.log(myShipsGrid)
    // console.log()
}

//my turn selecting enemy ship
const myTurn = () => {
    // console.log("---------------------------------------------------------------")
    console.log("Your turn!")
    console.log("Locate the enemy ship!")
    
    let condition = false;
    while (!condition) {
        enemyShipPosition = prompt("Where is the enemy ship hiding, Captain? ").toUpperCase();
        console.log("---------------------------------------------------------------")
        console.log()
        if (!((enemyShipPosition[0] === "A" || enemyShipPosition[0] === "a" ||
            enemyShipPosition[0] === "B" || enemyShipPosition[0] === "b" ||
            enemyShipPosition[0] === "C" || enemyShipPosition[0] === "c" ||
            enemyShipPosition[0] === "D" || enemyShipPosition[0] === "d" ||
            enemyShipPosition[0] === "E" || enemyShipPosition[0] === "e")
            &&
            (enemyShipPosition[1] === "0" || enemyShipPosition[1] === "1" ||
                enemyShipPosition[1] === "2" || enemyShipPosition[1] === "3" ||
                enemyShipPosition[1] === "4"))) {
            console.log("Invalid coordinates. Try again");
        } else {
            condition = true;
        }
    }

    if (enemyShipPosition == enemyShipCoordinate1) {
        console.log("You have shooted down their ship!")
        numOfEnemyShips--;
        friendlyMissiles--;
        console.log(`${numOfEnemyShips} more ship/s to go!`)
        enemyShipsGrid[enemyShipPosition[0]][enemyShipPosition[1]] = "H";
        console.table(enemyShipsGrid)
        enemyShipCoordinate1 = "";
        
    } else if (enemyShipPosition == enemyShipCoordinate2) {
        console.log("You have shooted down their ship!")
        numOfEnemyShips--;
        friendlyMissiles--;
        console.log(`${numOfEnemyShips} more ship/s to go!`)
        enemyShipsGrid[enemyShipPosition[0]][enemyShipPosition[1]] = "H";
        console.table(enemyShipsGrid)
        enemyShipCoordinate2 = "";
        
    } else if (enemyShipPosition == enemyShipCoordinate3) {
        console.log("You have shooted down their ship!")
        numOfEnemyShips--;
        friendlyMissiles--;
        console.log(`${numOfEnemyShips} more ship/s to go!`)
        enemyShipsGrid[enemyShipPosition[0]][enemyShipPosition[1]] = "H";
        console.table(enemyShipsGrid)
        enemyShipCoordinate3 = "";

    } else {
        console.log("You missed!")
        friendlyMissiles--;
        enemyShipsGrid[enemyShipPosition[0]][enemyShipPosition[1]] = "M";
        console.table(enemyShipsGrid)
    }

    console.log(`You have ${friendlyMissiles} missiles left`)
}

//matching if enemy shots hit my ships
const enemyTurn = () => {
    // console.log("---------------------------------------------------------------")
    console.log("Enemy turn!")
    const randomLocation = randomCoordinates()
    console.log(`Enemy targets the ${randomLocation} coordinates!`)

    if (randomLocation == shipPosition1) {
        console.log("They have hit your 1. ship!")
        numOfFriendlyShips--;
        enemyMissiles--;
        enemyTryGrid[randomLocation[0]][randomLocation[1]] = "H"
        console.table(enemyTryGrid)
        shipPosition1 = "";

    } else if (randomLocation == shipPosition2) {
        console.log("They have hit your 2. ship!")
        numOfFriendlyShips--;
        enemyMissiles--;
        enemyTryGrid[randomLocation[0]][randomLocation[1]] = "H"
        console.table(enemyTryGrid)
        shipPosition2 = "";

    } else if (randomLocation == shipPosition3) {
        console.log("They have hit your 3. ship!")
        numOfFriendlyShips--;
        enemyMissiles--;
        enemyTryGrid[randomLocation[0]][randomLocation[1]] = "H"
        console.table(enemyTryGrid)
        shipPosition3 = "";

    } else {
        console.log("They missed!")
        enemyMissiles--;
        enemyTryGrid[randomLocation[0]][randomLocation[1]] = "E"
        console.table(enemyTryGrid)
    }
    console.log(`Enemy has ${enemyMissiles} missiles left`)
    console.log()
    prompt("Press ENTER to continue")
}

//MAIN GAME LOOP
friendlyShipSelection()
while (numOfFriendlyShips > 0 && numOfEnemyShips > 0 && friendlyMissiles > 0 && enemyMissiles > 0) {
    console.log("---------------------------------------------------------------")
    console.log(`Round ${turnCounter}`)
    turnCounter++
    console.log()
    myTurn()
    console.log()
    prompt("Press ENTER to continue")
    console.log("---------------------------------------------------------------")
    console.log()
    enemyTurn()
    console.log()
    console.log("---------------------------------------------------------------")
    console.log()
    console.log(`(Your Last tried location was: ${enemyShipPosition})`)
    console.log(`Number of your ships left: ${numOfFriendlyShips}`)
    console.log(`Number of enemy ships left: ${numOfEnemyShips}`)
    console.log()
}

//Result evaluation
if (numOfFriendlyShips > numOfEnemyShips) {
    console.log("You won!")
} else if (numOfFriendlyShips < numOfEnemyShips) {
    console.log("You lost!")
} else {
    console.log("Draw! You have same amount of ships left")
}

console.log(`Number of your missiles left: ${friendlyMissiles}`)
console.log(`Number of enemy missiles left: ${lyMissiles}`)

