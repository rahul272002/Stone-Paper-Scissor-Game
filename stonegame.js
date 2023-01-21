const computerchoicedisplay = document.getElementById('computer-choice')
const userchoicedisplay = document.getElementById("your-choice");
const resultdisplay = document.getElementById('resultdis')
const possibleChoices = document.querySelectorAll('img')

let userchoice
let computerchoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userchoice = e.target.id
    userchoicedisplay.innerHTML = userchoice
    generateComputerChoice()
    generateResult()
}))

function generateComputerChoice(){
    const randomnumber = Math.floor(Math.random()*possibleChoices.length)+1

    if(randomnumber===1){
        computerchoice='rock'
    }

    if(randomnumber===2){
        computerchoice='scissors'
    }
    
    if(randomnumber===3){
        computerchoice='paper'
    }

    computerchoicedisplay.innerHTML = computerchoice
    
}

function generateResult(){
    if(computerchoice===userchoice){
        result = 'its a draw!'
    }
    if(computerchoice === 'scissor' && userchoice==='rock'){
        result = 'you win!'
    }
    if(computerchoice === 'scissor' && userchoice==='paper'){
        result = 'you lose!'
    }
    if(computerchoice === 'paper' && userchoice==='scissor'){
        result = 'you win!'
    }
    if(computerchoice === 'paper' && userchoice==='rock'){
        result = 'you lose!'
    }
    if(computerchoice === 'rock' && userchoice==='paper'){
        result = 'you win!'
    }
    if(computerchoice === 'rock' && userchoice==='scissor'){
        result = 'you lose!'
    }
    resultdisplay.innerHTML = result

}