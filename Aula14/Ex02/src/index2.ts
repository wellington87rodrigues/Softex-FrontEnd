class animal {

    falar(){}
}

class cachorro extends animal {
    falar(): void {
        console.log("au au")
    }
}

class gato extends animal {
    falar(): void {
        console.log("miau")
    }
}

const animais :  animal[] = [new cachorro(), new gato()]

animais.forEach(animal => {
    animal.falar()
});
