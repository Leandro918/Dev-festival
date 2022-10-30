let buyButtonn  = document.getElementById('butFinalizarCompra')
let form       = document.getElementById("for")
let butMais    = document.getElementById("butMais")
let butMenos   = document.getElementById("butMenos")
let quantidade = document.getElementById("quantidade")
let preco      = document.getElementById("preco")

 butMais.addEventListener("click", (e) =>{
   e.preventDefault();

    if (parseInt(quantidade.innerText) < 15) {
        quantidade.innerText = parseInt(quantidade.innerText)+1
        preco.innerText = parseInt(quantidade.innerText)*90
    }else{
        alert("Ingressos limitados !, É permitido a compra de 15 ingressos por pessoa .")
    }
 })

 butMenos.addEventListener("click", (e) =>{
    e.preventDefault();

     if (parseInt(quantidade.innerText) > 1) {
        quantidade.innerText = parseInt(quantidade.innerText)-1
        preco.innerText = parseInt(quantidade.innerText)*90
     }
 })

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let nome     = form.name.value;
    let email    = form.mail.value;
    let tickets  = quantidade.innerText;

    window.localStorage.setItem('nome', nome)
    window.localStorage.setItem('email', email)
    window.localStorage.setItem('tickets', tickets)

    window.location.href = "mensagem.html"
 })