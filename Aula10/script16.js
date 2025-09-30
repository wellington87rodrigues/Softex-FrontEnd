// document.addEventListener("DOMContentLoaded", function () {
//   const tabela = document.querySelector("table");
//   tabela.style.display = "none";
//   const btn = document.querySelector("#btnCalcular");
//   const nome = document.querySelector("#nome");
//   const nota1 = document.querySelector("#nota1");
//   const nota2 = document.querySelector("#nota2");
//   const nota3 = document.querySelector("#nota3");

//   btn.addEventListener("click", () => {
//     const nomeAluno = nome.value.trim();

//     if (nomeAluno === "") {
//       alert("Por favor, preencha o nome do aluno!");
//       return;
//     }

//     tabela.style.display = "block";

//     const notas = [
//       Number(nota1.value),
//       Number(nota2.value),
//       Number(nota3.value),
//     ];

//     let soma = notas[0] + notas[1] + notas[2];
//     let media = soma / notas.length;

//     let linha = document.createElement("tr");

//     let celAluno = document.createElement("td");
//     celAluno.textContent = nomeAluno;
//     linha.appendChild(celAluno);

//     let celNotas = document.createElement("td");
//     celNotas.textContent = notas.join(", ");
//     linha.appendChild(celNotas);

//     let celMedia = document.createElement("td");
//     celMedia.textContent = media.toFixed(2);
//     linha.appendChild(celMedia);

//     let celSituacao = document.createElement("td");
//     if (media <= 7) {
//       celSituacao.textContent = "Reprovado";
//     } else {
//       celSituacao.textContent = "Aprovado";
//     }
//     linha.appendChild(celSituacao);

//     tabela.appendChild(linha);
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("studentForm");
//   const tableBody = document.getElementById("alunosTableBody");
//   let alunos = [];

//   // Função para calcular a média
//   const calcularMedia = (n1, n2, n3) => {
//     return (n1 + n2 + n3) / 3;
//   };

//   // Função para determinar a situação do aluno
//   const determinarSituacao = (media) => {
//     if (media >= 7) {
//       return { texto: "Aprovado", classe: "status-aprovado" };
//     } else if (media >= 5 && media < 7) {
//       return { texto: "Recuperação", classe: "status-recuperacao" };
//     } else {
//       return { texto: "Reprovado", classe: "status-reprovado" };
//     }
//   };

//   // Função para atualizar a tabela na tela
//   const atualizarTabela = () => {
//     tableBody.innerHTML = ""; // Limpa a tabela antes de recriá-la

//     alunos.forEach((aluno) => {
//       const novaLinha = document.createElement("tr");
//       novaLinha.innerHTML = `
//                         <td>${aluno.nome}</td>
//                         <td>${aluno.nota1}</td>
//                         <td>${aluno.nota2}</td>
//                         <td>${aluno.nota3}</td>
//                         <td>${aluno.media.toFixed(2)}</td>
//                         <td class="${aluno.situacao.classe}">${
//         aluno.situacao.texto
//       }</td>
//                     `;
//       tableBody.appendChild(novaLinha);
//     });
//   };

//   // Evento de submit do formulário
//   form.addEventListener("submit", (event) => {
//     event.preventDefault(); // Impede o envio do formulário padrão

//     const nome = document.getElementById("nomeAluno").value;
//     const nota1 = parseFloat(document.getElementById("nota1").value);
//     const nota2 = parseFloat(document.getElementById("nota2").value);
//     const nota3 = parseFloat(document.getElementById("nota3").value);

//     // Validação simples dos dados
//     if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nome.trim() === "") {
//       alert("Por favor, preencha todos os campos corretamente.");
//       return;
//     }

//     // Calcula a média e determina a situação
//     const media = calcularMedia(nota1, nota2, nota3);
//     const situacao = determinarSituacao(media);

//     // Cria o objeto do aluno e adiciona à lista
//     const novoAluno = { nome, nota1, nota2, nota3, media, situacao };
//     alunos.push(novoAluno);

//     // Atualiza a tabela na tela
//     atualizarTabela();

//     // Limpa o formulário
//     form.reset();
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("studentForm");
  const tableBody = document.getElementById("alunosTableBody");
  let alunos = [];

  // --- MUDANÇA 2: PEGA O ELEMENTO DA SEÇÃO DA TABELA ---
  const tableSection = document.querySelector(".table-section");

  const calcularMedia = (n1, n2, n3) => {
    return (n1 + n2 + n3) / 3;
  };

  const determinarSituacao = (media) => {
    if (media >= 7) {
      return { texto: "Aprovado", classe: "status-aprovado" };
    } else if (media >= 5 && media < 7) {
      return { texto: "Recuperação", classe: "status-recuperacao" };
    } else {
      return { texto: "Reprovado", classe: "status-reprovado" };
    }
  };

  const atualizarTabela = () => {
    tableBody.innerHTML = "";

    alunos.forEach((aluno) => {
      const novaLinha = document.createElement("tr");
      novaLinha.innerHTML = `
                        <td>${aluno.nome}</td>
                        <td>${aluno.nota1}</td>
                        <td>${aluno.nota2}</td>
                        <td>${aluno.nota3}</td>
                        <td>${aluno.media.toFixed(2)}</td>
                        <td class="${aluno.situacao.classe}">${
        aluno.situacao.texto
      }</td>
                    `;
      tableBody.appendChild(novaLinha);
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nomeAluno").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nome.trim() === "") {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    const media = calcularMedia(nota1, nota2, nota3);
    const situacao = determinarSituacao(media);

    const novoAluno = { nome, nota1, nota2, nota3, media, situacao };
    alunos.push(novoAluno);

    // --- MUDANÇA 3: MOSTRA A TABELA APÓS O PRIMEIRO CADASTRO ---
    if (alunos.length === 1) {
      tableSection.style.display = "block";
    }

    atualizarTabela();
    form.reset();
  });
});
