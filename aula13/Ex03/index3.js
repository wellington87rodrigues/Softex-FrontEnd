class Retangulo{

    constructor(largura, altura){
        this.largura = largura
        this.altura = altura
    }

    area(){
        return `A area do retangulo é ${this.largura * this.altura}.`
    }

    perimetro(){
        return` O Perimetro do retangulo é ${2*(this.largura + this.altura)}.`
    }
}

const ret1 = new Retangulo(5, 3)
console.log(ret1.area(), ret1.perimetro())

