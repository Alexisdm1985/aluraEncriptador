import { desEncriptar, encriptar } from "./encriptacion.js";

document.getElementById('encriptarBtn').addEventListener('click', handleEncriptar)
document.getElementById('desencriptarBtn').addEventListener('click', handleDesencriptar)
document.getElementById('encrypt-copy-btn').addEventListener('click', handleCopiar)



function handleEncriptar(){
  let text = document.getElementById('userInput').value;
  
  // validar minusculas, tilde, vacio.
  const validacion = validarTexto(text);
  if (validacion.status === false){
    alert(validacion.mensaje);
    return;
  }

  const encryptedTextHtml = document.getElementById('encrypted-text');
  const encryptedPanelTextHtml = document.getElementById('encrypt-panel-text');

  encryptedTextHtml.textContent = encriptar(text);
  showText(encryptedTextHtml, encryptedPanelTextHtml);
}

function handleDesencriptar(){
  let text = document.getElementById('userInput').value;
 
  // validar minusculas, tilde, vacio.
  const validacion = validarTexto(text);
  if (validacion.status === false){
    alert(validacion.mensaje);
    return;
  }
  const encryptedTextHtml = document.getElementById('encrypted-text');

  console.log(desEncriptar(text));
  encryptedTextHtml.textContent =  desEncriptar(text);
 
}

function handleCopiar(){
  const encryptedTextHtml = document.getElementById('encrypted-text');
  let text = document.getElementById('userInput');
  text.value = encryptedTextHtml.textContent;
}


function showText (textHtml, imgHtml) {

  if (textHtml.style.display === 'none'){
    imgHtml.style.display = 'none';  
    textHtml.style.display = 'initial'
  }
}

function validarTexto(text) {
  const validacion = {
    status: false,
    mensaje: ""
  }

  //solo permite letras, números y espacios
  const regex = /^[a-zA-Z0-9\s]+$/;

  if (!text.trim()){
    validacion.mensaje = "Debe ingresar un texto. El campo no puede estar vacío.";
    return validacion;

  } else if (text !== text.toLowerCase()){
    validacion.mensaje = "Solo se permiten minusculas";
    return validacion;

  } else if (text !== text.normalize('NFD').replace(/[\u0300-\u036f]/g,"")){
    validacion.mensaje = "No se permiten tildes.";
    return validacion;
  } else if (!regex.test(text)){
    validacion.mensaje = "No se permiten caracteres especiales.";
    return validacion;
  }

  validacion.status = true;
  return validacion;
}