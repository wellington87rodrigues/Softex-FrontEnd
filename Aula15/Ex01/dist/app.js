"use strict";
// Conteúdo do arquivo app.ts
class Pessoa {
    // O construtor tipado é usado (TypeScript)
    constructor(nome) {
        this.nome = nome;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome}.`;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Usando 'as' para fazer o Type Casting e garantir que o TypeScript reconheça o tipo do elemento
    const nomeInput = document.getElementById('nomeInput');
    const apresentarBtn = document.getElementById('apresentarBtn');
    const saudacaoOutput = document.getElementById('saudacaoOutput');
    // Verificação de segurança para garantir que todos os elementos foram encontrados
    if (!nomeInput || !apresentarBtn || !saudacaoOutput) {
        console.error("Um ou mais elementos do DOM não foram encontrados.");
        return;
    }
    const displayMessage = (message, isSuccess) => {
        saudacaoOutput.textContent = message;
        saudacaoOutput.style.visibility = 'visible';
        // Usa o toggle para gerenciar a classe 'success' de forma limpa
        saudacaoOutput.classList.toggle('success', isSuccess);
    };
    const handleApresentar = () => {
        const nome = nomeInput.value.trim();
        if (nome) {
            // Instanciação da classe Pessoa
            const pessoa = new Pessoa(nome);
            const mensagem = pessoa.apresentar();
            displayMessage(mensagem, true);
        }
        else {
            displayMessage('Erro: Por favor, insira o seu nome.', false);
        }
    };
    // Adiciona os listeners de eventos
    apresentarBtn.addEventListener('click', handleApresentar);
    nomeInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleApresentar();
        }
    });
});
// class Pessoa {
//     nome: string;
//     constructor(nome: string) {
//         this.nome = nome;
//     }
//     apresentar() {
//         return `Olá, meu nome é ${this.nome}.`;
//     }
// }
//     document.addEventListener('DOMContentLoaded', () => {
//     const nomeInput = document.getElementById('nomeInput');
//     const apresentarBtn = document.getElementById('apresentarBtn');
//     const saudacaoOutput = document.getElementById('saudacaoOutput');
//     const displayMessage = (message, isSuccess) => {
//         saudacaoOutput.textContent = message;
//         saudacaoOutput.style.visibility = 'visible';
//         saudacaoOutput.classList.remove('success');
//         if (isSuccess) {
//             saudacaoOutput.classList.add('success');
//         }
//     };
//     const handleApresentar = () => {
//         const nome = nomeInput.value.trim();
//         if (nome) {
//             const pessoa = new Pessoa(nome);
//             const mensagem = pessoa.apresentar();
//             displayMessage(mensagem, true);
//         } else {
//             displayMessage('Erro: Por favor, insira o seu nome.', false);
//         }
//     };
//     apresentarBtn.addEventListener('click', handleApresentar);
//             nomeInput.addEventListener('keypress', (event) => {
//                 if (event.key === 'Enter') {
//                     handleApresentar();
//                 }
//             });
//         });
// // class Pessoa {
// //     nome: string;
// //     constructor(nome: string){
// //         this.nome = nome;
// //     }
// //     apresentar(){
// //     }
// // }
// // const pessoa = new Pessoa("Alfredo");
// // console.log(`Olá meu nome é "${pessoa.nome}".`)
// //   class Pessoa {
// //             nome: string;
// //             constructor(nome: string) {
// //                 this.nome = nome;
// //             }
// //             saudacao(nome: string) {
// //                 return `Olá, meu nome é ${this.nome}.`;
// //             }
// //         }
// //         document.addEventListener('DOMContentLoaded', () => {
// //             const nomeInput = document.getElementById('nomeInput');
// //             const apresentarBtn = document.getElementById('apresentarBtn');
// //             const saudacaoOutput = document.getElementById('saudacaoOutput');
// //             if (!nomeInput || !apresentarBtn || !saudacaoOutput) {
// //                 console.error('Erro: Elementos HTML não encontrados.');
// //                 return;
// //             }
// //             apresentarBtn.addEventListener("click", () =>{
// //                 const nome = nomeInput.value.trim()
// //                 const alvo = nome || "Visitante"
// //                 saudacaoOutput.textContent = apresentar(alvo)
// //             })
// //         });
// // document.addEventListener("DOMContentLoaded", function() {
// //     const btn = document.getElementById("btnTxt")
// //     const inputText = document.getElementById("text")
// //     const resultado = document.getElementById("resultado")
// //     btn.addEventListener("click", () =>{
// //         const nome = inputText.value.trim()
// //         const alvo = nome || "Visitante"
// //         resultado.textContent = saudacao(alvo)
// //     })
