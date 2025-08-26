    document.addEventListener("DOMContentLoaded", () => {

        let notasAlunos = [
            [7, 8, 6],
            [9, 5, 8],
            [6, 6, 7]
        ]

        const tabela = document.querySelector("table")

        for(let i=0; i<notasAlunos.length; i++){

            let linha = document.createElement("tr")

            let celAluno = document.createElement("td")
            celAluno.textContent = `Aluno ${i+1}`
            linha.appendChild(celAluno)

            let soma=0
            for(let j=0; j<notasAlunos[i].length; j++){
                
                let celNota = document.createElement("td")

                celNota.textContent = notasAlunos[i][j]
                linha.appendChild(celNota)
                soma += notasAlunos[i][j]
            }

            let media = soma/notasAlunos[i].length
            let celMedia = document.createElement("td")
            celMedia.textContent = media.toFixed(2)
            linha.appendChild(celMedia)

            tabela.appendChild(linha)
        }
    })