// Conteúdo do arquivo app.ts

/**
 * Classe que contém a lógica de negócios para as operações matemáticas básicas.
 */
class Calculadora {
    somar(num1: number, num2: number): number {
        return num1 + num2;
    }

    subtrair(num1: number, num2: number): number {
        return num1 - num2;
    }

    multiplicar(num1: number, num2: number): number {
        return num1 * num2;
    }

    dividir(num1: number, num2: number): number | string {
        if (num2 === 0) {
            return "Erro: Divisão por zero";
        }
        return num1 / num2;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos do DOM
    const num1Input = document.getElementById('num1') as HTMLInputElement;
    const num2Input = document.getElementById('num2') as HTMLInputElement;
    const resultadoOutput = document.getElementById('resultado') as HTMLDivElement;
    
    // Instancia a calculadora
    const calculadora = new Calculadora();

    /**
     * Exibe o resultado da operação na interface.
     * @param {number | string} resultado - O resultado ou uma mensagem de erro.
     */
    const exibirResultado = (resultado: number | string): void => {
        if (typeof resultado === 'string') {
            // Estilo para erro
            resultadoOutput.textContent = resultado;
            resultadoOutput.className = 'resultado error';
        } else {
            // Estilo para sucesso
            resultadoOutput.textContent = `Resultado: ${resultado.toFixed(2)}`;
            resultadoOutput.className = 'resultado success';
        }
    };

    /**
     * Função que tenta ler os números dos campos.
     * @returns {[number, number] | null} Um array com os dois números ou null se a entrada for inválida.
     */
    const obterNumeros = (): [number, number] | null => {
        const val1 = parseFloat(num1Input.value);
        const val2 = parseFloat(num2Input.value);

        if (isNaN(val1) || isNaN(val2)) {
            exibirResultado("Erro: Por favor, insira números válidos em ambos os campos.");
            return null;
        }
        return [val1, val2];
    };

    /**
     * Função genérica que lida com o clique de qualquer botão de operação.
     * @param {(calc: Calculadora, num1: number, num2: number) => number | string} operacao - O método da classe Calculadora a ser executado.
     */
    const handleOperacao = (operacao: (calc: Calculadora, num1: number, num2: number) => number | string): void => {
        const numeros = obterNumeros();
        if (numeros) {
            const [num1, num2] = numeros;
            const resultado = operacao(calculadora, num1, num2);
            exibirResultado(resultado);
        }
    };

    // 2. Event Listeners
    // Seleciona e adiciona o evento de clique para cada botão
    document.getElementById('somar')?.addEventListener('click', () => {
        handleOperacao((calc, n1, n2) => calc.somar(n1, n2));
    });

    document.getElementById('subtrair')?.addEventListener('click', () => {
        handleOperacao((calc, n1, n2) => calc.subtrair(n1, n2));
    });

    document.getElementById('multiplicar')?.addEventListener('click', () => {
        handleOperacao((calc, n1, n2) => calc.multiplicar(n1, n2));
    });

    document.getElementById('dividir')?.addEventListener('click', () => {
        handleOperacao((calc, n1, n2) => calc.dividir(n1, n2));
    });
});