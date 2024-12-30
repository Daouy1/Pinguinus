/* Javascript del archivo Index.html */
document.addEventListener('DOMContentLoaded', function () {
    fetch('get_publicaciones.php')
        .then(response => response.json())
        .then(data => {
            const publicacionesContainer = document.getElementById('publicacionesContainer');
            data.forEach(publicacion => {
                const publicacionElement = document.createElement('div');
                publicacionElement.className = 'publicacion';
                publicacionElement.innerHTML = `
                    <a href="ver_publicacion.php?id=${publicacion.id}">
                        <h3>${publicacion.title}</h3>
                    </a>
                `;
                publicacionesContainer.appendChild(publicacionElement);
            });
        });
});

/* Javascript del archivo FormPubli.html */
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

/* Javascript del archivo comunidades.html */
        document.addEventListener('DOMContentLoaded', function () {
            fetch('get_comunidades.php')
                .then(response => response.json())
                .then(data => {
                    const comunidadesContainer = document.getElementById('comunidadesContainer');
                    data.forEach(comunidad => {
                        const comunidadElement = document.createElement('div');
                        comunidadElement.className = 'comunidad';
                        comunidadElement.innerHTML = `<a href="ver_comunidad.php?id=${comunidad.id}"><h3>${comunidad.name}</h3></a>`;
                        comunidadesContainer.appendChild(comunidadElement);
                    });
                });
        });

/* Javascript compartidos entre archivos*/
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
