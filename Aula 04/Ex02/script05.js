document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#btnVerificar")
    const resultado = document.querySelector("#resultado")

    btn.addEventListener("click", () => {
        let idade = Number(document.querySelector("#idade").value)
        let temCNH = document.querySelector("#cnh").checked

        if(idade >= 18 && temCNH){
            resultado.textContent = "Pode Dirigir"
            resultado.className = "verde"
        } else {
            resultado.textContent = "Não Pode Dirigir"
            resultado.className = "vermelho"
        }
    })
})