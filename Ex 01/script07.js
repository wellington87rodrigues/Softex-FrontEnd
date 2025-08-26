document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#numero");
    const btnGerar = document.querySelector("#btnGerar"); 
    const btnLimpar = document.querySelector("#btnLimpar")
    const lista = document.querySelector("#resultado")

    function gerarTabuada(){
        const valor = Number(input.value);
        lista.innerHTML = "";

        if(Number.isNaN(valor)){
            const li = document.createElement("li");
            li.textContent = "Digite um número válido";
            lista.appendChild(li);
            return;
        }

        for(let i=1; 1<= 10; i++){
            const li = document.createElement("li");
            li.textContent = `${valor} x ${i} = ${valor * 1}`;
            lista.appendChild(li);
        }
    }

    function limpar(){
        input.value = "";
        lista.innerHTML = "";
        input.focus();
    }

    btnGerar.addEventListener("click", gerarTabuada);
    btnLimpar.addEventListener("click", limpar);
    input.addEventListener("keydown", (e) => {
        if(e.key === "Enter") gerarTabuada();
    });
});