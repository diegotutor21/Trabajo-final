// Cargar el nav y el footer de sus respectivos archivos en cada página
document.addEventListener("DOMContentLoaded", function () {
  // Cargar navbar
  fetch('./components/nav.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('afterbegin', data);
    });

  // Cargar footer
  fetch('./components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('beforeend', data);
    });
});
