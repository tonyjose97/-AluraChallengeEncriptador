//creamos variables//

const campo_texto  = document.querySelector(".input-texto");
const btnEncriptar = document.getElementById("btn-encriptar");
const campo_mensaje = document.querySelector(".texto-resultado");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar")


//asignamos eventos

btnEncriptar.addEventListener("click",btnEncriptarMensaje)

btnDesencriptar.addEventListener("click",btnDesencripTarMensaje)
btnCopiar.addEventListener("click",copiarMensaje)



 //funcion para el boton encriptar
function btnEncriptarMensaje(){
   const inputUsuario = cambiarLetras(campo_texto.value);
   chequearLetrasMinúsculas(inputUsuario)
   mostrarBotonCopiar()
   detectarMensajesConEspacios(inputUsuario)

   

  
    
}

//funcion para desencriptar mensaje
function btnDesencripTarMensaje(){
  const texto = volverTextoNormal(campo_texto.value)
  campo_mensaje.innerHTML = texto

}


//funcion para encriptar los mensajes
function cambiarLetras(fraseEncriptada){

    if(fraseEncriptada.includes("a")){
       fraseEncriptada = fraseEncriptada.replaceAll("a","ai")
       
    }if(fraseEncriptada.includes("e")){
        fraseEncriptada = fraseEncriptada.replaceAll("e","enter")
        
    }if(fraseEncriptada.includes("i")){
        fraseEncriptada = fraseEncriptada.replaceAll("i","imes")
        
    }if(fraseEncriptada.includes("o")){
        fraseEncriptada = fraseEncriptada.replaceAll("o","ober")
        
    }if(fraseEncriptada.includes("u")){
        fraseEncriptada = fraseEncriptada.replaceAll("u","ufat")
      
    }
    return fraseEncriptada
}


//funcion para desencriptar el mensaje
function volverTextoNormal(fraseEncriptada){

  if(fraseEncriptada.includes("ai")){
     fraseEncriptada = fraseEncriptada.replaceAll("ai","a")
     
  }if(fraseEncriptada.includes("enter")){
      fraseEncriptada = fraseEncriptada.replaceAll("enter","e")
      
  }if(fraseEncriptada.includes("imes")){
      fraseEncriptada = fraseEncriptada.replaceAll("imes","i")
      
  }if(fraseEncriptada.includes("ober")){
      fraseEncriptada = fraseEncriptada.replaceAll("ober","o")
      
  }if(fraseEncriptada.includes("ufat")){
      fraseEncriptada = fraseEncriptada.replaceAll("ufat","u") 
  }
  
  return fraseEncriptada
  
}

function copiarMensaje(){  
  const mensajeCopiado = navigator.clipboard.writeText(campo_mensaje.textContent)
  btnCopiar.value = "copiado" 
}


//funcion para cambiar el texto cuando se pase un mensaje
function cambiarTexto(clase,texto) {
  let textoCambiado = document.querySelector(clase)
  textoCambiado.innerHTML = texto

}

//funcion para confirmar que solo sean letras minisculas
/*function chequearLetrasMinisculas(input) {
  const texto = cambiarLetras(campo_texto.value);
  let lower = true;
  
  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    
    if (letter < 'a' || letter > 'z') {
      lower = false;
      break;
    }
  }

  if (lower) {
    cambiarTexto(".borrar","") 
    cambiarTexto(".borrar2","")
    cambiarTexto(".munieco","")
    campo_mensaje.innerHTML = texto
    cambiarTexto(".parrafo-alerta"," Mensaje aceptado")
    cambiarTexto(".img-alerta","")
    
    
   
  }else
  { 
    cambiarTexto(".texto-resultado","")
    cambiarTexto(".parrafo-alerta","NO SE PERMITEN LETRAS MAYUSCULAS")
    
  }
}*/


// funcion para detectar letras mayusculas
function chequearLetrasMayusculas(input) {
  const texto = volverTextoNormal(campo_texto.value)
  
  let upper = true;
  
  for(let i = 0; i < input.length; i++) {
    let letter = input[i];
    
    if (letter < 'A' || letter > 'Z') {
      upper = false;
      break; 
    }
  }

  if (upper) {

    return "Sólo contiene letras mayúsculas";
  } else {
    return "Contiene letras minúsculas y/o otros caracteres"; 
  }

}


function mostrarBotonCopiar() {

  if(campo_mensaje.length === 0 || campo_texto.value === "" ||campo_mensaje.value === "" ||campo_texto.length === 0 ||campo_texto === chequearLetrasMayusculas(campo_mensaje)){
   btnCopiar.style.display = "none"
   console.log("none")
   console.log(btnCopiar.textContent) 
   console.log(campo_mensaje.value)
  }
  else{ 
    btnCopiar.style.display = "block"
    console.log(" se mostro boton")
    console.log(btnCopiar.textContent)
    console.log(campo_mensaje.value)
}
}

function detectarMensajesConEspacios(text) {

  let mensajesConEspacios = text.trim();

  if(mensajesConEspacios.length === 0 || mensajesConEspacios.length === ""|| chequearLetrasMinúsculas(mensajesConEspacios)) { 
    cambiarTexto(".parrafo-alerta","Haz ingresado un mensaje en blanco")
    console.log("mensaje en blanco")
    return true;
  } else {
    console.log("mensaje con texto")
    return false;
  }

}


function chequearLetrasMinúsculas(input) {
  const texto = cambiarLetras(campo_texto.value)
  const MIN = 97;
  const MAX = 122; 

  let soloMinúsculas = true;

  for(let letra of input) {
    
    let codigo = letra.charCodeAt(0);

    if (codigo !== 32 && (codigo < MIN || codigo > MAX)) {
      soloMinúsculas = false;
    }

  }

  if(!soloMinúsculas) { 
    cambiarTexto(".texto-resultado","")
    cambiarTexto(".parrafo-alerta","NO SE PERMITEN LETRAS MAYUSCULAS")
    btnCopiar.style.display = "none"
    
     // Mostrar error 
  } else {    
    // Input válido
    cambiarTexto(".borrar","") 
    cambiarTexto(".borrar2","")
    cambiarTexto(".munieco","")
    campo_mensaje.innerHTML = texto
    cambiarTexto(".parrafo-alerta"," Mensaje aceptado")
    cambiarTexto(".img-alerta","")
  }

}


/****ACA QUEDAM0S */
//SOLICIONAR EL PROBLEMA DE QUE NO SE SALGA EL MENSAJE ENCRIPTADO DE SU CAJA Y COLOR ESE MISMO MENSAJE YA ENCRIPTODO 
//EN LA PARTE INFERIOS DE LA CAJA DONDE SE MUESTRA EL MUNIECO 