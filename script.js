alert("Este é um site feito totalmente por Leandro da Silva, e qualquer compra realizada nele será totalmente fictícia !")

let redirecionameto = document.getElementById("redCompra")

redirecionameto.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = "carrinho.html"
})

let redirecionameto1 = document.getElementById("redCompra1")

redirecionameto1.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = "carrinho.html"
})