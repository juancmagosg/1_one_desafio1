function encriptar(){
  let texto = document.getElementById("inputTexto").value.toLowerCase();
  // i para revisar mayúsculas y minúsculas
  // g para toda la línea u oración
  // m para revisar múltiples líneas o párrafo
  let txtCifrado = texto.replace(/e/igm,"enter");
  // Sigue reemplazando sobre el texto que se empiza a revisar
  txtCifrado = txtCifrado.replace(/o/igm,"ober");
  txtCifrado = txtCifrado.replace(/i/igm,"imes");
  txtCifrado = txtCifrado.replace(/a/igm,"ai");
  txtCifrado = txtCifrado.replace(/u/igm,"ufat");

  // Imagen y texto derechos se ocultan al encriptar
  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  // Coloca el texto cifrado
  document.getElementById("texto2").innerHTML = txtCifrado;
  // Aparece botón Copiar
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  inputTexto.value = "";
}

function desencriptar(){
  let texto = document.getElementById("inputTexto").value.toLowerCase();
  // i para revisar mayúsculas y minúsculas
  // g para toda la línea u oración
  // m para revisar múltiples líneas o párrafo
  let txtCifrado = texto.replace(/enter/igm,"e");
  // Sigue reemplazando sobre el texto que se empiza a revisar
  txtCifrado = txtCifrado.replace(/ober/igm,"o");
  txtCifrado = txtCifrado.replace(/imes/igm,"i");
  txtCifrado = txtCifrado.replace(/ai/igm,"a");
  txtCifrado = txtCifrado.replace(/ufat/igm,"u");
  
  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  
  document.getElementById("texto2").innerHTML = txtCifrado;
  
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}


function copiar(){
  let contenido = document.getElementById("texto2").innerHTML;    
  navigator.clipboard.writeText(contenido);
  alert("¡Se copió el texto!");
}