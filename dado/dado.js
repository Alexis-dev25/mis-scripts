// Detectar preferencia de color del sistema
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
}

// Toggle de tema
document.getElementById('themeToggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});

// Lógica del juego
const playButton = document.getElementById('playButton');
const playAgainButton = document.getElementById('playAgainButton');
const diceElement = document.getElementById('dice');
const resultsTable = document.getElementById('resultsTable');
const resultsBody = document.getElementById('resultsBody');

playButton.addEventListener('click', playGame);
playAgainButton.addEventListener('click', playGame);

function playGame() {
    const rolls = parseInt(document.getElementById('rolls').value);
    if (isNaN(rolls) || rolls < 1) {
        alert('Por favor ingresa un número válido');
        return;
    }
    
    const faces = [1, 2, 3, 4, 5, 6];
    const facesCount = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
    
    // Mostrar animación del dado
    diceElement.style.display = 'block';
    diceElement.textContent = '🎲';
    
    setTimeout(() => {
        for (let i = 0; i < rolls; i++) {
            const choice = faces[Math.floor(Math.random() * faces.length)];
            facesCount[choice]++;
        }
        
        // Mostrar resultados
        resultsBody.innerHTML = '';
        for (const [face, count] of Object.entries(facesCount)) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${face}</td><td>${count}</td>`;
            resultsBody.appendChild(row);
        }
        
        resultsTable.style.display = 'table';
        playAgainButton.style.display = 'block';
        playButton.style.display = 'none';
        diceElement.style.display = 'none';
    }, 500);
}