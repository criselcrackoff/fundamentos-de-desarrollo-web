// DOM
const correo = document.getElementById("correo")
const contrasenia = document.getElementById("contrasenia")
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    // Escribe tu código aqui abajo
    console.log(correo.value, "contraseña")
})