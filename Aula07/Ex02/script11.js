function dobrar(x){
    return x * 2;
}

document.addEventListener("DOMContentLoaded", function(){
    const btn = document.querySelector("#btnDobro");
    const inputNum = document.querySelector("#num");
    const resultado = document.getElementById("result");

    btn.addEventListener("click", () => {
        const valor = Number(inputNum.value);
        if (!isNaN(valor)) {
            resultado.textContent = `O dobro de ${valor} é ${dobrar(valor)}.`;
        } else {
            resultado.textContent = "Por favor, insira um número válido.";
        }
    });
})