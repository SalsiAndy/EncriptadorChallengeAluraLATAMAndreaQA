let textArea = document.querySelector(".text-area");
let mensaje = document.querySelector(".mensaje");

let textoCopiado = "";

function btnEncriptar() {
    // Encripta el texto del textarea original
    let textoEncriptado = encriptar(textArea.value);
    
    // Muestra el texto encriptado en el textarea de mensaje
    mensaje.value = textoEncriptado;
    
    // Limpia el textarea original
    textArea.value = "";
    
    // Quita cualquier imagen de fondo (asumiendo que esto es parte de tu diseño)
    mensaje.style.backgroundImage = "none";

    document.querySelector('.mensajeNoEncontrado').style.display = 'none';
}
    


function encriptar(stringEncriptada) {
    // Matriz de codificación
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    // Convierte a minúsculas
    stringEncriptada = stringEncriptada.toLowerCase();

    // Reemplaza cada carácter según la matriz de codificación
    for (let i = 0; i < codigo.length; i++) {
        if (stringEncriptada.includes(codigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(codigo[i][0], codigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    // Desencripta el texto del textarea original
    let textoDesencriptado = desencriptar(textArea.value);
    
    // Muestra el texto desencriptado en el textarea de mensaje
    mensaje.value = textoDesencriptado;
    
    // Limpia el textarea original
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    // Matriz de decodificación
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    // Convierte a minúsculas
    stringDesencriptada = stringDesencriptada.toLowerCase();

    // Reemplaza cada palabra clave por su carácter original
    for (let i = 0; i < codigo.length; i++) {
        if (stringDesencriptada.includes(codigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copiarTexto() {
    // Obtén el texto encriptado del textarea de mensaje
    textoCopiado = mensaje.value;

}

function pegarTexto() {
    // Pega el texto copiado en el textarea original
    textArea.value = textoCopiado;
}