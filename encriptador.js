var textArea = document.querySelector(".text-area");
var mensaje = document.querySelector(".mensaje");

function encriptar(text) {
  var result = "";
  for (i = 0; i < text.length; i++) {
    switch(text[i]) {
      case 'e':
        result += "enter";
        break;
      case 'i':
        result += "imes";
        break;
      case 'a':
        result += "ai";
        break;
      case 'o':
        result += "ober";
        break;
      case 'u':
        result += "ufat";
        break;
      default:
        result += text[i];
    }
  }
  return result;
}

function desencriptar(text) {
    text = text.replace(/enter/g, 'e');
    text = text.replace(/imes/g, 'i');
    text = text.replace(/ai/g, 'a');
    text = text.replace(/ober/g, 'o');
    text = text.replace(/ufat/g, 'u');
    return text;
}

function btnEncriptar(){
	const textoEncriptado= encriptar(textArea.value);
	mensaje.value = textoEncriptado;
	textArea.value = "";
  mensaje.style.backgroundImage = "none";
}
function btnDesencriptar(){
	const textoEncriptado= desencriptar(textArea.value);
	mensaje.value = textoEncriptado;
}

document.querySelector(".btn-copiar").addEventListener("click",()=>{
  copyToClipBoard(mensaje);
  alert("Texto Copiado!!");    
}
)


function btnCopiar() {

  const copyText = document.getElementById("mensaje");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);

  alert("Texto copiado al portapapeles");

  const textoCopiado = mensaje.value;
  textArea.value = textoCopiado;
  mensaje.value = "";

}

function NumText(string){//solo letras y numeros
	var out = '';
	//Se añaden las letras validas
    var filtro = 'abcdefghijklmnñopqrstuvwxyz1234567890 ';//Caracteres validos
	
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
		   out += string.charAt(i);
    return out;
}