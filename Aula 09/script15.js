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

        const notas = [
            parseFloat(nota1.value),
            parseFloat(nota2.value),
            parseFloat(nota3.value)
        ];

        // Calcula a soma e a média
        let soma = notas.reduce((acc, nota) => acc + nota, 0);
        let media = soma / notas.length;

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


// document.addEventListener("DOMContentLoaded", function () {
//     const tabela = document.querySelector("table");
//     tabela.style.display ="none"
//     const btn = document.querySelector("#btnCalcular");
//     const nome = document.querySelector("#nome");
//     const nota1 = document.querySelector("#nota1");
//     const nota2 = document.querySelector("#nota2");
//     const nota3 = document.querySelector("#nota3");

//     btn.addEventListener("click", () => {
       
//         if(nome.length == 0){
//               alert("digite o nome")
           
//         } else{
//            tabela.style.display ="block"
//         // Pega os valores das notas e do nome
//         const nomeAluno = nome.value;
//         const notas = [
//             parseFloat(nota1.value),
//             parseFloat(nota2.value),
//             parseFloat(nota3.value)
//         ];

//         // Calcula a soma e a média
//         let soma = notas.reduce((acc, nota) => acc + nota, 0);
//         let media = soma / notas.length;

//         // Cria a nova linha na tabela
//         let linha = document.createElement("tr");

//         // Adiciona o nome do aluno
//         let celAluno = document.createElement("td");
//         celAluno.textContent = nomeAluno;
//         linha.appendChild(celAluno);

//         // Adiciona as notas na mesma célula
//         let celNotas = document.createElement("td");
//         celNotas.textContent = notas.join(", ");  // Exibe as notas separadas por vírgula
//         linha.appendChild(celNotas);

//         // Adiciona a média
//         let celMedia = document.createElement("td");
//         celMedia.textContent = media.toFixed(2);
//         linha.appendChild(celMedia);

//         // Adiciona a situação (Aprovado/Reprovado)
//         let celSituacao = document.createElement("td");
//         if (media <= 7) {
//             celSituacao.textContent = "Reprovado";
//         } else {
//             celSituacao.textContent = "Aprovado";
//         }
//         linha.appendChild(celSituacao);

//         // Adiciona a linha na tabela
//         tabela.appendChild(linha);
//         }
        
//     });
// });


// document.addEventListener("DOMContentLoaded", function(){
    
//     let soma = 0
//     const tabela = document.querySelector("table")
//     const btn = document.querySelector("#btnCalcular")
//     const nome = document.querySelector("#nome")
//     const nota1 = document.querySelector("#nota1")
//     const nota2 = document.getElementById("nota2")
//     const nota3 = document.getElementById("nota3")
//     // let notas = [nota1, nota2, nota3]
//     // console.log(notas)

//     soma = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value)) / 3;

//     console.log("a media eh: "+soma)

//     btn.addEventListener("click", () => {
       
//         for(let i=0; i<3; i++){

//         let linha = document.createElement("tr")

//         let celAluno = document.createElement("td")
//         celAluno.textContent = `${nome}`
       
//         linha.appendChild(celAluno)

//         for(let j=0; j<3; j++){
            
//             let celNota = document.createElement("td")

//             celNota.textContent = notas[0]
//             linha.appendChild(celNota)
//             soma += notas[0]
//         }

//         let media = soma/nota1

//         let celMedia = document.createElement("td")
//         celMedia.textContent = media.toFixed(2)
//         linha.appendChild(celMedia)

//         let celSituacao = document.createElement("td")
//         if(media <= 7){
//             celSituacao.textContent = "Reprovado"
//         }else{
//             celSituacao.textContent = "Aprovado"
//         }
//         linha.appendChild(celSituacao)

//         tabela.appendChild(linha)
//     }

//        })
//     })



//    const tabela = document.querySelector("table")
//     let soma=0

//     for(let i=0; i<notasAlunos.length; i++){

//         let linha = document.createElement("tr")

//         let celAluno = document.createElement("td")
//         celAluno.textContent = `Aluno ${i+1}`
//         linha.appendChild(celAluno)

//         for(let j=0; j<notasAlunos[i].length; j++){
            
//             let celNota = document.createElement("td")

//             celNota.textContent = notasAlunos[i][j]
//             linha.appendChild(celNota)
//             soma += notasAlunos[i][j]
//         }

//         let media = soma/notasAlunos[i].length

//         let celMedia = document.createElement("td")
//         celMedia.textContent = media.toFixed(2)
//         linha.appendChild(celMedia)

//         let celSituacao = document.createElement("td")
//         if(media <= 7){
//             celSituacao.textContent = "Reprovado"
//         }else{
//             celSituacao.textContent = "Aprovado"
//         }
//         linha.appendChild(celSituacao)

//         tabela.appendChild(linha)