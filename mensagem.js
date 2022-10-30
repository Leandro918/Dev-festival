const nome    = window.localStorage.getItem('nome')
const email   = window.localStorage.getItem('email')
const tickets = window.localStorage.getItem('tickets')

let nomeSelect  = document.getElementById('name')
let emailSelect = document.getElementById('e_mail')
let quantSelect = document.getElementById('qtd')


nomeSelect.innerText  = nome
emailSelect.innerText = email
quantSelect.innerText = tickets

console.log(nome)
console.log(email)
console.log(tickets)

let retorno = document.getElementById('retorno')

retorno.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = "index.html"

})