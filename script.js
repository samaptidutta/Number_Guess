let randNum = parseInt((Math.random() * 100) + 1)
console.log(randNum);

let btn = document.querySelector(".btn")
let userInput = document.querySelector(".numGuess")

let guessSlot = document.querySelector(".prevGuess")
let remaining = document.querySelector(".lastRes")
let lowOrhigh = document.querySelector(".lowOrhigh")
// console.log(lowOrhigh);

let res = document.querySelector('.result')

let p = document.createElement('p')
let button = document.querySelector(".button")
let pResult = document.createElement('p')


let playGame = true
let prevGuess = []
let gameCount = 1

if (playGame) {
    btn.addEventListener("click", (e) => {
        e.preventDefault()

        console.log("hello");
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validGuess(guess)

    })
}

function validGuess(guess) {
    if (isNaN(guess)) {
        alert("please enter a number!")

    }
    else if (guess < 1) {
        alert("please enter the number greater than 0")
    }

    else if (guess > 100) {
        alert("please enter the number less than or equal to 100")
    }

    else {
        prevGuess.push(guess)
        if (gameCount === 11) {
            displayGuess(guess)
            displayMessage(`<h2>Game Over<br>the Random Number is ${randNum}</h2>`)
            document.body.style.backgroundColor="crimson"
            endGame()
        }

        else {
            checkGuess(guess)
            displayGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randNum) {
        displayMessage(`<h2 style="color: rgb(248, 232, 9);"">You WIN<br>The random number is ${randNum}</h2>`)
        document.body.style.backgroundColor="green"
        endGame()
    }

    else if (guess < randNum) {
        displayMessage(`Number is Low`)
        console.log(`guess number : ${guess}`);
        console.log(`random number ${randNum}`);
    }
    else if (guess > randNum) {
        displayMessage(`Number is High`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    remaining.innerHTML = `${11 - gameCount}`
    gameCount++
    

}

function displayMessage(message) {
    lowOrhigh.innerHTML = `<h3>${message}</h3>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')

    
    p.classList.add('button')
    p.innerHTML = `<h4 id ="newgame">start new game</h4>`
    document.querySelector(".start").appendChild(p)
    playGame = false
    p.style.cursor="pointer"
    p.style.fontSize="30px"
    p.style.backgroundColor="#3B4371"
    p.style.width="200px"
    p.style.margin="auto"
    startGame()

}

function startGame() {
    let newGame = document.querySelector("#newgame")
    newGame.addEventListener("click", () => {
        prevGuess = []
        gameCount = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - gameCount}`
        playGame = true
        userInput.removeAttribute('disabled')
        document.querySelector(".start").removeChild(p)
        document.body.style.backgroundColor="#283048"
        console.log();
        
        displayMessage(" ")
        
    })

}





