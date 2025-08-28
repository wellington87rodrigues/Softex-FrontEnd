function saudacao(nome) {
        return `Olá, ${nome}! Bem-vindo(a)!`
    }

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btnTxt")
    const inputText = document.getElementById("text")
    const resultado = document.getElementById("resultado")

    btn.addEventListener("click", () =>{
        const nome = inputText.value.trim()
        const alvo = nome || "Visitante"
        resultado.textContent = saudacao(alvo)
    })
})