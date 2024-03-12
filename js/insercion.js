(function($) {
  'use strict';

  // Selectmenu
  $('select').selectmenu();

}(jQuery));

function mostrarVentanaEmergente() {
  document.getElementById("ventanaEmergente").style.display = "block";
}

function cerrarVentana() {
  document.getElementById("ventanaEmergente").style.display = "none";
}

document.getElementById("mostrarTerminos").addEventListener("click", function(event) {
  event.preventDefault(); 
  mostrarVentanaEmergente();
});

// Asignar la función al evento de clic en el enlace
document.getElementById("mostrarTerminos").addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que el enlace redireccione
  mostrarVentanaEmergente();
});

// Asignar la función al evento de clic en el enlace
document.getElementById("mostrarTerminos").addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que el enlace redireccione
  mostrarVentanaEmergente();
});

// Asignar la función al evento de clic en el enlace
document.getElementById("mostrarTerminos").addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que el enlace redireccione
  mostrarVentanaEmergente();
});

function limitarCCV(event) {
  let ccv = event.target.value.trim();
  if (ccv.length > 3) {
    event.target.value = ccv.slice(0, 3);
  }
  event.target.value = event.target.value.replace(/[^\d]/g, '');
}

function limitarCardNumber(event) {
  let cardNumber = event.target.value.trim();
  if (cardNumber.length > 19) {
    event.target.value = cardNumber.slice(0, 19);
  }
  event.target.value = event.target.value.replace(/[^\d\s]/g, '');
}
document.getElementById('card__number').addEventListener('input', limitarCardNumber);

document.getElementById('terminos').addEventListener('change', function() {
  let checkboxCustom = document.getElementById('checkbox-custom');
  if (this.checked) {
    checkboxCustom.classList.add('checked');
  } else {
    checkboxCustom.classList.remove('checked');
  }
});

function mostrarMensajeError(id, mostrar) {
  let elemento = document.getElementById(id);
  let inputElement = elemento.previousElementSibling; // Obtener el elemento input
  if (mostrar) {
    elemento.style.visibility = "visible";
    elemento.classList.add('error'); // Agrega la clase de error al mensaje de ayuda
    inputElement.classList.add('input-error'); // Agrega la clase de error al input
    // Cambia el estilo del checkbox
    document.getElementById("terminos").classList.add('checkbox-error');
  } else {
    elemento.style.visibility = "hidden";
    elemento.classList.remove('error'); // Elimina la clase de error del mensaje de ayuda
    inputElement.classList.remove('input-error'); // Elimina la clase de error del input
    // Restablece el estilo del checkbox
    document.getElementById("terminos").classList.remove('checkbox-error');
  }
}

function validaCardHolder() {
  let cardHolder = document.getElementById("card__holder").value.trim();
  let valido = cardHolder !== "" && /^[a-zA-Z\s]*$/.test(cardHolder); // Solo caracteres alfabéticos y espacios permitidos
  mostrarMensajeError("card__holderHelp", !valido);
  return valido;
}

function validaCardNumber() {
  let cardNumber = document.getElementById("card__number").value.replace(/\s/g, ''); // Elimina los espacios en blanco del número de tarjeta
  let valido = /^\d{13,19}$/.test(cardNumber); // Modificado para permitir hasta 19 dígitos
  mostrarMensajeError("card__numberHelp", !valido);
  return valido;
}

function validaExpiration() {
  let expirationMonth = document.getElementById("card__expiration__month").value;
  let expirationYear = document.getElementById("card__expiration__year").value;
  let valido = expirationMonth !== "" && expirationYear !== "" && !isNaN(expirationMonth) && !isNaN(expirationYear);
  mostrarMensajeError("card__expirationHelp", !valido);
  return valido;
}

function validaCCV() {
  let ccv = document.getElementById("card__ccv").value.trim();
  let valido = /^[0-9]{3}$/.test(ccv);
  mostrarMensajeError("card__ccvHelp", !valido);
  return valido;
}

function validaTerminos() {
  let terminos = document.getElementById("terminos");
  let valido = terminos.checked;
  mostrarMensajeError("terminosHelp", !valido);
  return valido;
}

function validacion() {
  return (
    validaCardHolder() &&
    validaCardNumber() &&
    validaExpiration() &&
    validaCCV() &&
    validaTerminos()
  );
}