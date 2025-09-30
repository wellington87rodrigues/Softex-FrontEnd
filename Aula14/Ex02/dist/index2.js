"use strict";
class animal {
    falar() { }
}
class cachorro extends animal {
    falar() {
        console.log("au au");
    }
}
class gato extends animal {
    falar() {
        console.log("miau");
    }
}
const animais = [new cachorro(), new gato()];
animais.forEach(animal => {
    animal.falar();
});
