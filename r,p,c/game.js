function elegirAleatorio(lista) {
    let indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

const options = ["piedra", "papel", "tijera"];
const symbolMap = {
    piedra: "✊",
    papel: "✋",
    tijera: "✌"
};

function determinarGanador(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) return "tie";
    if (
        (userChoice === "tijera" && cpuChoice === "piedra") ||
        (userChoice === "piedra" && cpuChoice === "papel") ||
        (userChoice === "papel" && cpuChoice === "tijera")
    ) {
        return "cpu";
    }
    return "user";
}

// Agregar al inicio del archivo
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌙';
themeToggle.className = 'theme-toggle';
themeToggle.style.position = 'absolute';
themeToggle.style.top = '20px';
themeToggle.style.right = '20px';
themeToggle.style.fontSize = '1.5rem';
themeToggle.style.background = 'transparent';
themeToggle.style.border = 'none';
themeToggle.style.cursor = 'pointer';
document.body.appendChild(themeToggle);

// Verificar preferencia del sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

// Toggle manual
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Modificar la función actualizarInterfaz
function actualizarInterfaz(userChoice, cpuChoice, resultado) {
    const playerChoiceElement = document.getElementById('player-choice');
    const cpuChoiceElement = document.getElementById('cpu-choice');
    const resultElement = document.getElementById('result');

    playerChoiceElement.textContent = symbolMap[userChoice];
    cpuChoiceElement.textContent = symbolMap[cpuChoice];

  // Reset clases
    playerChoiceElement.className = 'player-choice';
    cpuChoiceElement.className = 'player-choice';

  // Agregar animación de shake
    playerChoiceElement.classList.add('shake');
    cpuChoiceElement.classList.add('shake');
    
    setTimeout(() => {
    playerChoiceElement.classList.remove('shake');
    cpuChoiceElement.classList.remove('shake');
    
    if (resultado === "tie") {
        resultElement.textContent = "¡Empate!";
        playerChoiceElement.classList.add('tie');
        cpuChoiceElement.classList.add('tie');
    } else if (resultado === "user") {
        resultElement.textContent = "¡Ganaste!";
        playerChoiceElement.classList.add('winner');
        cpuChoiceElement.classList.add('loser');
    } else {
        resultElement.textContent = "¡La CPU ganó!";
        playerChoiceElement.classList.add('loser');
        cpuChoiceElement.classList.add('winner');
    }
    }, 500);
}

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.dataset.choice;
        const cpuChoice = elegirAleatorio(options);
        const resultado = determinarGanador(userChoice, cpuChoice);
        actualizarInterfaz(userChoice, cpuChoice, resultado);
    });
});