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

// -------------------------
// MENÚ HAMBURGUESA
// -------------------------
function toggleMenu() {
  const menu = document.getElementById("menuMovil");
  menu.classList.toggle("active");
}

// Cerrar el menú si haces clic fuera
document.addEventListener("click", function(event) {
  const menu = document.getElementById("menuMovil");
  const burger = document.querySelector(".hamburguesa");

  if (!menu.contains(event.target) && !burger.contains(event.target)) {
    menu.classList.remove("active");
  }
});


function copiarTexto(texto, mensaje) {
  navigator.clipboard.writeText(texto).then(() => {
    const aviso = document.getElementById("mensaje-copiado");
    aviso.textContent = mensaje;
    setTimeout(() => { aviso.textContent = ""; }, 2000); // se borra a los 2 segundos
  });
}

function copiarTexto(texto, mensaje) {
  navigator.clipboard.writeText(texto).then(() => {
    mostrarToast(mensaje);
  });
}

function mostrarToast(mensaje) {
  const toast = document.getElementById("toast");
  toast.textContent = mensaje;
  toast.className = "toast show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 2500); // dura 2.5 segundos
}
