let button = document.getElementById("getCat")
let textoLoading = document.getElementById("textoLoading")
let catContainer = document.getElementById("imagem")

button.addEventListener("click", () => {
    textoLoading.style.display = "block"

    fetch("https://api.thedogapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
        const imgUrl =data[0].url
        catContainer.innerHTML = `<img src="${imgUrl}">`
    })
})

// API DE CEP ################################
let cepInput = document.getElementById("cepInput")
let buttonCEP = document.getElementById("buscarCEP")

// 06708-280

buttonCEP.addEventListener("click", () => {
    fetch(`https://viacep.com.br/ws/${cepInput.value}/json`)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("logradouro").innerText = `Rua: ${data.logradouro}`
    })
})

/// API DE COTAÇÕES DE MOEDA - MONTAR JASON QUE BUSQUE INFORMAÇÕES NESTE SITE:
/// https://docs.awesomeapi.com.br/api-de-moedas

function valorEuro(){
    fetch("https://economia.awesomeapi.com.br/json/last/EUR-BRL")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        document.getElementById("euroValor").innerText = parseFloat(data.EURBRL.bid).toFixed(2)
    })
}

function valorDolar(){
    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        document.getElementById("dolarValor").innerText = parseFloat(data.USDBRL.bid).toFixed(2)
    })
}

function valorBTC(){
    fetch("https://economia.awesomeapi.com.br/json/last/BTC-BRL")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        document.getElementById("btcValor").innerText = parseFloat(data.BTCBRL.bid).toFixed(2)
    })
}