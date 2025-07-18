function elegirAleatorio(lista) {
    let indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

// Variables para los sonidos
const flipSound = document.getElementById('flipSound');
const winSound = document.getElementById('winSound');
const loseSound = document.getElementById('loseSound');

// Variable para controlar si la moneda está girando
let isFlipping = false;

function elegirLado(lado) {
    if (isFlipping) return; // Evitar múltiples clics durante la animación
    
    isFlipping = true;
    const coin = document.getElementById('coin');
    const resultado = document.getElementById('resultado');
    
    // Reproducir sonido de giro
    flipSound.currentTime = 0;
    flipSound.play();
    
    // Agregar clase de animación
    coin.classList.add('flip');
    
    // Deshabilitar botones temporalmente
    document.querySelectorAll('button').forEach(btn => {
        btn.disabled = true;
    });
    
    // Limpiar resultado anterior
    resultado.textContent = '';
    
    // Esperar a que termine la animación
    setTimeout(() => {
        // Generar resultado aleatorio (cara o cruz)
        const random = Math.random();
        const ladoGanador = random < 0.5 ? 'cara' : 'cruz';
        
        // Mostrar resultado
        if (lado === ladoGanador) {
            resultado.textContent = '¡Ganaste! Era ' + ladoGanador;
            resultado.style.color = '#4CAF50';
            // Reproducir sonido de victoria
            winSound.currentTime = 0;
            winSound.play();
            
            // Efecto de confeti
            for (let i = 0; i < 50; i++) {
                crearConfeti();
            }
        } else {
            resultado.textContent = 'Perdiste. Era ' + ladoGanador;
            resultado.style.color = '#f44336';
            // Reproducir sonido de derrota
            loseSound.currentTime = 0;
            loseSound.play();
        }
        
        // Quitar clase de animación y habilitar botones
        setTimeout(() => {
            coin.classList.remove('flip');
            document.querySelectorAll('button').forEach(btn => {
                btn.disabled = false;
            });
            isFlipping = false;
        }, 500);
    }, 1500);
}

// Función para crear efecto de confeti
function crearConfeti() {
    const confeti = document.createElement('div');
    confeti.style.position = 'absolute';
    confeti.style.width = '10px';
    confeti.style.height = '10px';
    confeti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confeti.style.borderRadius = '50%';
    confeti.style.left = `${Math.random() * 100}%`;
    confeti.style.top = '-10px';
    confeti.style.zIndex = '1000';
    
    document.body.appendChild(confeti);
    
    // Animación del confeti
    const animacion = confeti.animate(
        [
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], 
        {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.1, 0.8, 0.9, 1)'
        }
    );
    
    animacion.onfinish = () => confeti.remove();
}

// Efecto hover en los botones
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});

const readline = require('readline');

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

let caras  = ["sello", "cruz"];
let cpu = elegirAleatorio(caras);
console.log("Opciones: (Sello)  (Cara)");
rl.question("¿Que cara escojes? ".toLocaleLowerCase() , function(user){
    if (user == cpu) {
        console.log("Ganaste!!")
    }
    else {
        console.log("Has perdido!! callo" , cpu)
    }
});
