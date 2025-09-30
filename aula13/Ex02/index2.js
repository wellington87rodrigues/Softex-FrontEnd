class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    detalhes(){
        return `O carro de marca ${this.marca}, modelo ${this.modelo} e ano ${this.ano}.`
    }
}

const carro1 = new Carro("Toyota", "Corolla", 2025)
const carro2 = new Carro("Honda", "Civic", 2023)

console.log(carro1.detalhes())
console.log(carro2.detalhes())
