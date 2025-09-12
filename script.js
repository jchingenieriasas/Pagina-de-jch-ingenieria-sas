const text = [
  "Instalaciones Eléctricas ",
  "Obras Civiles ",
  "Mantenimiento y Montajes ",
  "Diseño y Consultoría ",
  "Proyectos Agroindustriales "
];

let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  const element = document.getElementById("typewriter");
  if (!element) return;
  const current = text[i];

  element.textContent = isDeleting
    ? current.substring(0, j--)
    : current.substring(0, j++);

  if (!isDeleting && j === current.length) {
    setTimeout(() => { isDeleting = true; typeEffect(); }, 2000);
  } else if (isDeleting && j === 0) {
    isDeleting = false; i = (i + 1) % text.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
