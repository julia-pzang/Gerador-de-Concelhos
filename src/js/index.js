const botao = document.querySelector(".botao")
const concelhoId = document.querySelector(".titulo")
const concelhos = document.querySelector(".texto")

async function getApi() {
    try{
        const randomAdvice = await fetch("https://api.adviceslip.com/advice")

        if (!randomAdvice.ok){
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API")
    }

    const retorno = await randomAdvice.json()
    const id = `Advice #${retorno.slip.id}`
    const texto = `"${retorno.slip.advice}"`

    concelhoId.innerText = id
    concelhos.innerText = texto
} catch (err) {
    console.error("Erro ao tentar buscar as informações da API", err);
  }
}

botao.addEventListener( "click", getApi)

getApi()