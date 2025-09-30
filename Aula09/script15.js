document.addEventListener("DOMContentLoaded", function () {
    const tabela = document.querySelector("table");
    tabela.style.display ="none"
    const btn = document.querySelector("#btnCalcular");
    const nome = document.querySelector("#nome");
    const nota1 = document.querySelector("#nota1");
    const nota2 = document.querySelector("#nota2");
    const nota3 = document.querySelector("#nota3");

    btn.addEventListener("click", () => {
        
        // Pega os valores das notas e do nome
        const nomeAluno = nome.value.trim();  // Remover espaços extras no começo/fim

        // Verifica se o nome foi preenchido
        if (nomeAluno === "") {
            alert("Por favor, preencha o nome do aluno!");  // Mensagem de erro
            return;  // Não insere nada na tabela
        }

        tabela.style.display ="block"

        // const notas = [
        //     parseFloat(nota1.value),
        //     parseFloat(nota2.value),
        //     parseFloat(nota3.value)
        // ];

        // Calcula a soma e a média
        //let soma = notas.reduce((acc, nota) => acc + nota, 0);
        //let media = soma / notas.length;

        let soma=0;
        for(let i=0; i<3; i++){
            soma = nota1 + nota2 + nota3
        }

        let media = soma / 3

        // Cria a nova linha na tabela
        let linha = document.createElement("tr");

        // Adiciona o nome do aluno
        let celAluno = document.createElement("td");
        celAluno.textContent = nomeAluno;
        linha.appendChild(celAluno);

        // Adiciona as notas na mesma célula
        let celNotas = document.createElement("td");
        celNotas.textContent = notas.join(", ");  // Exibe as notas separadas por vírgula
        linha.appendChild(celNotas);

        // Adiciona a média
        let celMedia = document.createElement("td");
        celMedia.textContent = media.toFixed(2);
        linha.appendChild(celMedia);

        // Adiciona a situação (Aprovado/Reprovado)
        let celSituacao = document.createElement("td");
        if (media <= 7) {
            celSituacao.textContent = "Reprovado";
        } else {
            celSituacao.textContent = "Aprovado";
        }
        linha.appendChild(celSituacao);

        // Adiciona a linha na tabela
        tabela.appendChild(linha);
    });
});



