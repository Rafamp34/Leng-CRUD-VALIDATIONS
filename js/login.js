function validarNombreUsuario() {
    let nombreUsuario = document.getElementById("username");
    let ayudaNombreUsuario = document.getElementById("usernameHelp");
    if (!nombreUsuario.value.trim().match(/^[a-zA-Z0-9]{8,12}$/)) {
        ayudaNombreUsuario.style.visibility = "visible";
        nombreUsuario.classList.add("input-error");
        return false;
    }
    nombreUsuario.classList.remove("input-error");
    ayudaNombreUsuario.style.visibility = "hidden";
    return true;
}

function validarContrasena() {
    let contrasena = document.getElementById("password");
    let ayudaContrasena = document.getElementById("passwordHelp");
    const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
    if (!contrasena.value.match(patron)) {
        ayudaContrasena.style.visibility = "visible";
        contrasena.classList.add("input-error");
        return false;
    }
    contrasena.classList.remove("input-error");
    ayudaContrasena.style.visibility = "hidden";
    return true;
}

function validarFormulario() {
    return validarNombreUsuario() && validarContrasena();
}