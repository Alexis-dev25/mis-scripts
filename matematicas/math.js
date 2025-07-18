function elegirAleatorio(lista) {
        let indice = Math.floor(Math.random() * lista.length);
        return lista[indice];
}

const readline = require('readline');

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

let numeros = [];
let simbolos = ["+", "-", "*"];

console.log("(facil)  (medio)  (dificil)");
rl.question("Elige una dificultad: " , function(dificultad){
        if (dificultad == "facil") {
                numeros = [1,2,3,4,5,6,7,8,9,10];
        }
        else if (dificultad == "medio") {
                numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        }
        else if (dificultad == "dificil") {
                numeros = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
        }

        let num1 = elegirAleatorio(numeros);
        let num2 = elegirAleatorio(numeros);
        let simbolo = elegirAleatorio(simbolos);
        let operacion = num1 + simbolo + num2;
        let respuesta = eval(operacion);
        console.log(operacion);

        rl.question("¿Cual es el resultado? " , function(answer){
                if (answer == respuesta){
                        console.log("Correcto");
                }
                else {
                        console.log("Incorrecto");
                }
                rl.close();
        });
});