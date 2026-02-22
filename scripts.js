const result = document.querySelector(".result")
const humanScore = document.querySelector("#score-human")
const machineScore = document.querySelector("#score-machine")

let humanScoreNumber = 0
let machineScoreNumber = 0
let gameOver = false

const playHuman = (humanChoice) => {
    if (gameOver) return
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['paper', 'rock', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    result.classList.add("show") // MOSTRA A CAIXA

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } 
    else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } 
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu!"
    }

    checkWinner()
}

const checkWinner = () => {

    if (humanScoreNumber === 10 || machineScoreNumber === 10) {

        gameOver = true

        result.classList.remove("show") // 👈 ESCONDE O RESULTADO

        const winnerText = humanScoreNumber === 10
            ? "🎉 PARABÉNS! VOCÊ GANHOU O JOGO!"
            : "🤖 A MÁQUINA GANHOU O JOGO!"

        const overlay = document.createElement("div")
        overlay.classList.add("winner-overlay")

        overlay.innerHTML = `
            <div class="winner-box">
                <h2>${winnerText}</h2>
                <button onclick="restartGame()">Jogar Novamente</button>
            </div>
        `

        document.body.appendChild(overlay)
    }
}

const restartGame = () => {
    humanScoreNumber = 0
    machineScoreNumber = 0
    gameOver = false

    humanScore.innerHTML = 0
    machineScore.innerHTML = 0
    result.innerHTML = ""

    document.querySelector(".winner-overlay").remove()
}