document.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector("#btnCalcular");

    btn.addEventListener("click", () => {
        let num1 = Number(document.querySelector("#num1").value)
        let num2 = Number(document.querySelector("#num2").value)

        if(isNaN(num1) || isNaN(num2)){
            alert("Digite dois numeros válidos")
        }

        document.querySelector("#soma").textContent = num1 + num2
        document.querySelector("#sub").textContent = num1 - num2
        document.querySelector("#mult").textContent = num1 * num2
        document.querySelector("#divis").textContent = num1 / num2 != 0 ? (num1 / num2).toFixed(2) : "Divisão por zero"
        document.querySelector("#rest").textContent = num1 % num2 != 0 ? num1 % num2 : "Não aplicável"

    })

})
