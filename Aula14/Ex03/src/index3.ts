class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }

    desconto(porcentagem: number){
        const valorDesconto = this.preco * (porcentagem / 100);
        return this.preco - valorDesconto;
    }
}

const produto1 = new Produto("Combustivel", 200);
const precoDesconto = produto1.desconto(10);

console.log(`o Produto "${produto1.nome}" custava R$${produto1.preco.toFixed(2)}.`)
console.log(`com um desconto de 10%, o novo preço fica R$${precoDesconto.toFixed(2)}`)