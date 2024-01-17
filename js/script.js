/**
 * author: Jorge Ordiz Pérez
 * github:
 */

const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const observaciones = document.querySelector("#observaciones");

let mensajesErrores = [];

//Funciones

const validar = (e) => {
  e.preventDefault();
  mensajesErrores = [];
  nombre.value.trim().length === 0 &&
    mensajesErrores.push("El nombre es un campo obligatorio");
  !/^[A-Z][a-z]+$/.test(nombre.value.trim()) &&
    mensajesErrores.push(
      "El nombre no es válido, debe empezar por mayúscula y no contener números"
    );
  !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value.trim()) &&
    mensajesErrores.push(
      "Introduce una dirección de correo electrónico válida"
    );
    //mensaje de error para la textbox
    observaciones.value.trim().length < 10 && mensajesErrores.push("El mensaje no puede ser inferior a los 10 caracteres");


  //Enviar errores o mostrar mensaje de error

  if (
    mensajesErrores.length === 0 &&
    confirm("¿Estás seguro de enviar el formulario?")
  ) {
    formulario.submit();
  } else if (mensajesErrores.length > 0) {
    errores.textContent = "";
    console.log(mensajesErrores);
    mensajesErrores.forEach(function (mensaje) {
      const miLi = document.createElement("li");
      miLi.textContent = mensaje;
      errores.appendChild(miLi);
    });
  }
};

//Evento correspondiente a enviar

formulario.addEventListener("submit", validar);
