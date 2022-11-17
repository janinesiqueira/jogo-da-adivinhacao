const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let randonNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterClick)

function handleTryClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

if(Number(inputNumber.value) == randonNumber){
  toggleScreen()

  document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`
} else if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
  alert('Digite um número entre 0 e 10!')
  xAttempts--
} else if(inputNumber.value.lenght == "" || !(Number(inputNumber.value))){
  alert('Erro. Digite um número válido')
  xAttempts--
}

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick(){
  toggleScreen()
  xAttempts = 1
  randonNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterClick(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
}