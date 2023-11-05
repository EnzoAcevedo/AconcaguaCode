document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const usuario = document.getElementById("usuario").value;
        const contrasena = document.getElementById("contrasena").value;

        if (usuario.trim() === "" || contrasena.trim() === "") {
            alert("Por favor, complete todos los campos.");
            event.preventDefault();
        }
    });
});