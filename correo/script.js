const simbolos = ["@", "!", "#", "$", "%", "&", "*", "<", ">", "?", "~", "^", "¿"];

function elegirAleatorio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function validarCampos() {
    const campos = ['nombre', 'apellido', 'numero', 'dominio'];
    let todosValidos = true;

    campos.forEach(campo => {
        const elemento = document.getElementById(campo);
        if (!elemento.value) {
            elemento.classList.add('error');
            todosValidos = false;
            setTimeout(() => elemento.classList.remove('error'), 500);
        }
    });

    return todosValidos;
}

document.getElementById('generar').addEventListener('click', function() {
    if (!validarCampos()) return;

    const nombre = document.getElementById('nombre').value.toLowerCase().replace(" ","_");
    const apellido = document.getElementById('apellido').value.toLowerCase().replace(" ","_");
    const numero = document.getElementById('numero').value;
    const dominio = document.getElementById('dominio').value;
    const simbolo = elegirAleatorio(simbolos);

    const correo = nombre + apellido + simbolo + numero + dominio;
    const password = nombre + apellido + simbolo + numero;

    const resultContainer = document.querySelector('.result-container');
    resultContainer.classList.remove('hidden');
    setTimeout(() => resultContainer.classList.add('visible'), 100);

    document.getElementById('correoGenerado').textContent = correo;
    document.getElementById('passwordGenerada').textContent = password;
});

// Remover clase de error cuando el usuario comienza a escribir
document.querySelectorAll('.input-field, .select-field').forEach(input => {
    input.addEventListener('input', function() {
        this.classList.remove('error');
    });
});