const boxes = document.querySelector(".boxes")
const noteWrite = document.querySelector(".note-write")
const title = document.querySelector(".note-write")
const closeNnote = document.querySelector(".closeNote")
const boxConfirmação = document.querySelector(".confirmacao")
let tituloDaNota = document.querySelector('.title')
let textoDaNota = document.querySelector('.content')

// Quando clica em adicionar novo cartão
function add() {
  boxes.style.display = 'none'
  noteWrite.style.display = 'flex'
}

//Quando clica no X para fechar area de adicionar novo cartão
function closeNote() {
  noteWrite.style.display = 'none'
  boxes.style.display = 'flex'
}

// Adicionar nota

function salvar() {
  // caixa de confirmação
  noteWrite.style.display = 'none'
  boxConfirmação.style.display = 'flex'

}

// caso o usuario aperte para salvar a nota

function save() {

  noteWrite.style.display = 'flex'
  boxConfirmação.style.display = 'none'

  criandoNovaNota()

  //animação de Salvo com sucesso!
  let butãoSalvar = document.querySelector('.butão-salvar')
  butãoSalvar.innerHTML = ' <h5 style="color: greenyellow;">SALVO COM SUCESSO!</h5>'
  setTimeout(function closeNote() {
    noteWrite.style.display = 'none'
    boxes.style.display = 'flex'
    butãoSalvar.innerHTML = ' <h5>SALVA</h5>'
    tituloDaNota.value = " "
    textoDaNota.value = " "
  }, 900)

}

// é um função que so existe em JS e é chamada em save()
function criandoNovaNota() {

  // array com dados da nota
  let nota = [tituloDaNota.value, textoDaNota.value]

  // criando anotação
  let ul = document.querySelector('.lista')
  let novaLi = document.createElement('li')
  let novaDiv = document.createElement('div')
  let novaH1 = document.createElement('h1')
  let novaP = document.createElement('p')
  novaH1.textContent = `${nota[0]}`
  novaP.textContent = `${nota[1]}`


  novaP.textContent = `${nota[1]}`


  var itens = document.getElementsByTagName('li');

  novaDiv.appendChild(novaH1);
  novaDiv.appendChild(novaP);
  novaLi.appendChild(novaDiv);
  ul.insertBefore(novaLi, itens[0]);

  nota = []


}

// caso o usuario click em delet a nota

function delet() {
  noteWrite.style.display = 'flex'
  boxConfirmação.style.display = 'none'

  let butãoSalvar = document.querySelector('.butão-salvar')
  butãoSalvar.innerHTML = ' <h5 style="color:  #fb3a3a;">DELETADO!</h5>'
  setTimeout(function closeNote() {
    noteWrite.style.display = 'none'
    boxes.style.display = 'flex'
    butãoSalvar.innerHTML = ' <h5>SALVA</h5>'
    tituloDaNota.value = " "
    textoDaNota.value = " "
  }, 900)
}


// clicar ver notas
let listaDeAnotacoes = document.querySelector(" div.anotacoes")
let mainDoBoxes = document.querySelector(".mainDoBoxes")
function look() {
  mainDoBoxes.style.display = 'none'
  listaDeAnotacoes.style.display = 'flex'
}

function closeLista() {
  mainDoBoxes.style.display = 'flex'
  listaDeAnotacoes.style.display = 'none'
}



