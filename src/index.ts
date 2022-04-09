function mensaje() {
  let nombreInput = document.getElementById("nombre");

  alert("Hola " + nombreInput.value);
}

let btnNombre = document.getElementById("probar");
btnNombre?.addEventListener("click", mensaje);
