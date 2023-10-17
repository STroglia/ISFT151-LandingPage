// Obtener una referencia al formulario de inscripción
const formularioCarrera1 = document.getElementById("formularioCarrera1");

// Agregar un evento de escucha para el envío del formulario
formularioCarrera1.addEventListener("submit", function (event) {
    // Detener el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos de texto
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    // Validar que se ingresen valores en los campos
    if (nombre.trim() === "" || email.trim() === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor.
        // Por ahora, simplemente mostramos un mensaje de éxito.
        alert("¡Inscripción exitosa!");
        // Puedes redirigir al usuario a otra página si es necesario.
        // window.location.href = "otra_pagina.html";
    }
});

// JavaScript para evitar que el enlace de información se comporte como un enlace normal
document.addEventListener("DOMContentLoaded", function () {
    const infoLink = document.querySelector(".info-link");

    infoLink.addEventListener("click", function (e) {
        e.preventDefault(); // Evita que el enlace realice su acción predeterminada

        // Hace scroll hasta la sección de Información
        document.querySelector("#informacion").scrollIntoView({
            behavior: "smooth" // Hace el scroll suave
        });
    });
});
// Función para el desplazamiento suave
function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  // Asociar el evento de clic a los enlaces internos
  var internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = link.getAttribute('href');
      smoothScroll(targetId, 1000); // 1000 ms (1 segundo) de duración del desplazamiento
    });
  });
  


