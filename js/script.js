const loadingMessage = document.getElementById('loadingMessage');
loadingMessage.style.display = 'block';
fetch('get_publicaciones.php')
    .then(response => response.json())
    .then(data => {
        loadingMessage.style.display = 'none';
        // Renderizar publicaciones
    });

/* Validación para publicar*/
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


/* Filtro de Busqueda */
document.getElementById('searchBar').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const publicaciones = document.querySelectorAll('#publicacionesContainer .publicacion');

    publicaciones.forEach(publicacion => {
        const titulo = publicacion.querySelector('h3').textContent.toLowerCase();
        if (titulo.includes(query)) {
            publicacion.style.display = 'block';
        } else {
            publicacion.style.display = 'none';
        }
    });
});

