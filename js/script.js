const loadingMessage = document.getElementById('loadingMessage');
loadingMessage.style.display = 'block';
fetch('get_publicaciones.php')
    .then(response => response.json())
    .then(data => {
        loadingMessage.style.display = 'none';
        // Renderizar publicaciones
    });
