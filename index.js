const botonEncabezado = document.querySelector("#boton-encabezado");
const encabezadoLista = document.querySelector("#encabezado-lista");
const campos = document.querySelectorAll(".contacto__entrada");

botonEncabezado.addEventListener("click", () => {
    encabezadoLista.classList.toggle("mostrar__menu")
});

campos.forEach(campo => {
    campo.addEventListener("blur", event => {
        if (event.target.value) {
            campo.classList.add("campo__completo");
        }
        else {
            campo.classList.remove("campo__completo");
        }
    });
});

