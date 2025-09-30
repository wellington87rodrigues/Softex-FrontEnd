document.addEventListener("DOMContentLoaded", () => {
    
    const arrayAleatorio = [];
    const qtdNumeros = 10;
    const min = 1;
    const max = 100;

    for (let i = 0; i < qtdNumeros; i++) {
        //Gera um número aleatório entre min e max (inclusive)
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        arrayAleatorio.push(numeroAleatorio);
        
    }
    
    if(arrayAleatorio % 2 == 0){
        console.log(`numeros pares ${arrayAleatorio}`)
    }else{
        console.log(`numeros impares ${arrayAleatorio}`)
    }
    console.log(arrayAleatorio)


    // function gerarArrayAleatorio() {
    //     const arrayAleatorio = [];
    //     const qtdNumeros = 10;
    //     const min = 1;
    //     const max = 100;

    //     for (let i = 0; i < qtdNumeros; i++) {
    //         // Gera um número aleatório entre min e max (inclusive)
    //         const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    //         arrayAleatorio.push(numeroAleatorio);
    //     }
  
    //     return arrayAleatorio;
    // }

    // const meusNumeros = gerarArrayAleatorio();   
    // console.log(meusNumeros);
    
    
})