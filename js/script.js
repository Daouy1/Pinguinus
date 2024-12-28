const loadingMessage = document.getElementById('loadingMessage');
loadingMessage.style.display = 'block';
fetch('get_publicaciones.php')
    .then(response => response.json())
    .then(data => {
        loadingMessage.style.display = 'none';
        // Renderizar publicaciones
    });

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
