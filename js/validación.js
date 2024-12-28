document.getElementById('formPublicacion').addEventListener('submit', function (event) {
    const titulo = document.getElementById('titulo').value.trim();
    const contenido = document.getElementById('contenido').value.trim();
    const errorContainer = document.getElementById('errorContainer');

    errorContainer.style.display = 'none';
    errorContainer.innerHTML = '';

    if (titulo === '' || contenido === '') {
        event.preventDefault();
        errorContainer.style.display = 'block';
        errorContainer.innerHTML = 'Por favor, completa todos los campos obligatorios.';
    } else if (titulo.length < 5) {
        event.preventDefault();
        errorContainer.style.display = 'block';
        errorContainer.innerHTML = 'El título debe tener al menos 5 caracteres.';
    }
});
