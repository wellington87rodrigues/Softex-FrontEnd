// class ContaBancaria {
//   #saldo = 0;

//   depositar(valor) {
//      this.#saldo += valor;
//      return `Seu Saldo atual é ${this.#saldo}`
//   }

//   sacar(valor){
//     if(valor <= this.#saldo){
//         this.#saldo -= valor;
//          return `Seu Saldo atual é ${this.#saldo}`
//     }else{
//          return `Seu Saldo é insuficiente para saque, seu saldo atual é ${this.#saldo}`
//     }

//   }
//   verSaldo(){
//     return`Olá, seu Saldo é ${this.#saldo}`;
//   }
// }

// const minhaContaBancaria = new ContaBancaria()
// console.log(minhaContaBancaria.verSaldo())
// console.log(minhaContaBancaria.depositar(100))
// console.log(minhaContaBancaria.verSaldo())
// console.log(minhaContaBancaria.sacar(200))
// console.log(minhaContaBancaria.sacar(50))

class ContaBancaria{
    #saldo = 0

    depositar(valor){
        this.#saldo += valor
    }

    sacar(valor){
        if(valor <= this.#saldo){
            this.#saldo -= valor
        }else{
            console.log("Saldo Insuficiente!")
        }
    }

    verSaldo(){
        return `Saldo atual: R$${this.#saldo}`
    }
}

const conta = new ContaBancaria()
conta.depositar(100)
conta.sacar(30)

console.log(conta.verSaldo())
