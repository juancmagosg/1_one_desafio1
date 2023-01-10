function encriptar(){
  var texto = document.getElementById("inputTexto").value.toLowerCase();
  // i para revisar mayúsculas y minúsculas
  // g para toda la línea u oración
  // m para revisar múltiples líneas o párrafo
  var txtCifrado = texto.replace(/e/igm,"enter");
  // Sigue reemplazando sobre el texto que se empiza a revisar
  var txtCifrado = txtCifrado.replace(/o/igm,"ober");
  var txtCifrado = txtCifrado.replace(/i/igm,"imes");
  var txtCifrado = txtCifrado.replace(/a/igm,"ai");
  var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

  // Imagen y texto derechos se ocultan al encriptar
  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  // Coloca el texto cifrado
  document.getElementById("texto2").innerHTML = txtCifrado;
  // Aparece botón Copiar
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
  var texto = document.getElementById("inputTexto").value.toLowerCase();
  // i para revisar mayúsculas y minúsculas
  // g para toda la línea u oración
  // m para revisar múltiples líneas o párrafo
  var txtCifrado = texto.replace(/enter/igm,"e");
  // Sigue reemplazando sobre el texto que se empiza a revisar
  var txtCifrado = txtCifrado.replace(/ober/igm,"o");
  var txtCifrado = txtCifrado.replace(/imes/igm,"i");
  var txtCifrado = txtCifrado.replace(/ai/igm,"a");
  var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
  
  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  
  document.getElementById("texto2").innerHTML = txtCifrado;
  
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
  var contenido = document.querySelector("#texto2");
  contenido.select();
  // Para cortar el texto
  document.execCommand("copy");
  alert("¡Se copió el texto!");
}