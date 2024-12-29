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
