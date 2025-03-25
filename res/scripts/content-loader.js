function loadContent(lang) {
    fetch(`/${lang}/index.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Loading error:', error));
}