const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function elegirAleatorio(lista) {
    let indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

let simbolos = ["@", "!", "#", "$", "%", "&", "*", "<", ">", "?", "~", "^", "¿"];
let direccion = "";

console.log(" ");
console.log("Esto es un generador de direcciones de correo electrónico");
rl.question("¿Cual es tu nombre? ", function(nombre) {
    nombre = nombre.toLowerCase();
    rl.question("¿Cual es tu apellido? ", function(apellido) {
        apellido = apellido.toLowerCase();
        rl.question("Danos un numero: ", function(numero) {
            console.log("¿Qué dirección de correo electrónico deseas usar? (gmail #1)  (outlook #2)  (hotmail #3)");
            rl.question(" ", function(quest) {
                console.log(" ");
                if (quest === "1") {
                    direccion = "@gmail.com";
                }
                else if (quest === "2") {
                    direccion = "@outlook.com";
                }
                else if (quest === "3") {
                    direccion = "@hotmail.com";
                }
                else {
                    console.log("Dirección no encontrada ⚠");
                    rl.close();
                    return;
                }
                
                let simbolo = elegirAleatorio(simbolos);
                console.log("Tu correo electronico es: " + nombre + apellido + simbolo + numero + direccion);
                console.log("Contraseña sugerida: " + nombre + apellido + simbolo + numero);
                console.log(" ");
                rl.close();
            });
        });
    });
});
