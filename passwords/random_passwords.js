// Generador de contraseñas
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const simbols = ["@", "#", "$", "%", "&", "*", "=", "+", "-", "^", "~", ">", "<", "{", "}", "[", "]"];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Obtener el nombre de la compañía
readline.question("Danos el nombre de la compañía para la que quieres el password: ", (company) => {
    company = company.replace(" ", "_")
    // Generar caracteres aleatorios
    const getRandomElements = (array, count) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const random_letters = getRandomElements(letters, 6);
    const random_numbers = getRandomElements(numbers, 2);
    const random_symbol = getRandomElements(simbols, 1);

    // Combinar todas las partes en el password
    const password_parts = [...random_letters, ...random_numbers, ...random_symbol, company];

    // Mezclar el array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Crear el password final
    const password = shuffleArray(password_parts).join('');
    console.log("\nTu password es: " + password);
    
    // Cerrar la interfaz de readline
    readline.close();
});