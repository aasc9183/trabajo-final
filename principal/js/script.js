var controlImagen = 0;
muestraImagen();

function muestraImagen() {
  var i;
  var listaDeImagenes = document.getElementsByClassName("imagen");
  var listaDePuntos = document.getElementsByClassName("punto");
  for (i = 0; i < listaDeImagenes.length; i++) {
    listaDeImagenes[i].style.display = "none";  
  }
  controlImagen++;
  if (controlImagen > listaDeImagenes.length) {controlImagen = 1}    
  for (i = 0; i < listaDePuntos.length; i++) {
    listaDePuntos[i].className = listaDePuntos[i].className.replace(" active", "");
  }
  listaDeImagenes[controlImagen-1].style.display = "block";  
  listaDePuntos[controlImagen-1].className += " active";
  setTimeout(muestraImagen, 2100); 
}
