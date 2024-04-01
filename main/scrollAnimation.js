const elements = document.querySelectorAll('.scrollElement');

function checkPosition() {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const positionFromTop = element.getBoundingClientRect().top;

    if (positionFromTop - window.innerHeight < 0) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  }
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', checkPosition);

// Llama a checkPosition() al cargar la página para verificar los elementos visibles
//window.addEventListener('DOMContentLoaded', checkPosition);
