document.addEventListener("DOMContentLoaded", () => {

    let vet = [5,10,3,8,1]
    let maior=0, menor, aux

    for(let i=0;i<=4;i++){
        aux = vet[i]
        if(aux > maior){
            maior = aux
        } else{
            menor = aux
        }  
    }

    console.log(`o maior é ${maior}`)
    console.log(`o menor é ${menor}`)
    
})