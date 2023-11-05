const cuadros = document.querySelectorAll('.cuadro');

cuadros.forEach(cuadro => {
  cuadro.addEventListener('mouseenter', function() {
    const especificaciones = cuadro.querySelector('.especificaciones');
    especificaciones.style.display = 'block';
  });

  cuadro.addEventListener('mouseleave', function() {
    const especificaciones = cuadro.querySelector('.especificaciones');
    especificaciones.style.display = 'none';
  });
});

let carrusel = document.querySelector('.carrusel');

carrusel.addEventListener('click', function() {
    carrusel.style.animationPlayState = 'paused';
});
