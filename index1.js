function encriptar() {
  let textoOriginal = document.getElementById("texto").value.trim();

  if (textoOriginal.length === 0) {
    mostrarError("Debes ingresar un texto para encriptar.");
    return;
  }

  let textoCifrado = cifrarTexto(textoOriginal);

  mostrarResultado(textoOriginal, textoCifrado, "Texto encriptado con éxito", "./img/encriptado.jpg");
  mostrarBotonCopiar(true);
}

function desencriptar() {
  let textoEncriptado = document.getElementById("texto").value.trim();

  if (textoEncriptado.length === 0) {
    mostrarError("Debes ingresar un texto para desencriptar.");
    return;
  }

  let textoOriginal = descifrarTexto(textoEncriptado);

  mostrarResultado(textoEncriptado, textoOriginal, "Texto desencriptado con éxito", "./img/desencriptado.jpg");
  mostrarBotonCopiar(true);
}

function cifrarTexto(texto) {
  // Implementa tu lógica de encriptación aquí
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  return textoCifrado;
}

function descifrarTexto(texto) {
  // Implementa tu lógica de desencriptación aquí
  let textoDescifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  return textoDescifrado;
}

function mostrarResultado(textoOriginal, textoResultado, titulo, imagen) {
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  document.getElementById("texto").value = textoResultado;
  tituloMensaje.textContent = titulo;
  parrafo.textContent = textoResultado;
  muñeco.src = imagen;
}

function mostrarBotonCopiar(mostrar) {
  let botonCopiar = document.getElementById("btn-copiar");
  botonCopiar.style.display = mostrar ? "block" : "none";
}

function copiarTexto() {
  let parrafo = document.getElementById("parrafo");

  // Crear un elemento de texto temporal para copiar el contenido
  let textoCopiar = document.createElement("textarea");
  textoCopiar.value = parrafo.textContent;

  // Agregar el elemento temporal al DOM
  document.body.appendChild(textoCopiar);

  // Seleccionar y copiar el texto
  textoCopiar.select();
  document.execCommand("copy");

  // Eliminar el elemento temporal
  document.body.removeChild(textoCopiar);

  // Mostrar algún mensaje o efecto visual de copia exitosa
  alert("Texto copiado al portapapeles.");
}

function mostrarError(mensaje) {
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  muñeco.src = "./img/muñeco.png";
  tituloMensaje.textContent = "Error";
  parrafo.textContent = mensaje;
}
