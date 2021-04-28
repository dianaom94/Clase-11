
let validacion = "inicio";
function validanombre (){
    let nombre= document.getElementById("nombre").value;
    let error = document.getElementById("error");
    if (nombre.length<5){

        error.classList.remove("invisible");
        document.getElementById("nombre").classList.remove("verificado"); //se llama así para poder llamar al input completo
        document.getElementById("nombre").classList.add("errorinput");
        error.classList.add("error");
        error.innerHTML="El nombre debe contener al menos 4 caracteres";
        validacion = "error"
        
    }else {
        error.classList.add("invisible");
        document.getElementById("nombre").classList.add("verificado");
        validacion="bien";
        
    }

    
}

function validaapellido (){
    let apellido= document.getElementById("apellido").value;
    let error = document.getElementById("error");
    if (apellido.length<5){

        error.classList.remove("invisible");
        document.getElementById("apellido").classList.remove("verificado"); //se llama así para poder llamar al input completo
        document.getElementById("apellido").classList.add("errorinput");
        error.classList.add("error");
        error.innerHTML="El apellido debe contener al menos 4 caracteres";
        validacion = "error"
        
    }else {
        error.classList.add("invisible");
        document.getElementById("apellido").classList.add("verificado");
        validacion = "bien"
       
    }


}

function validapais (){
    let pais= document.getElementById("pais").value;
    let error = document.getElementById("error");
    if (pais.length<4){

        error.classList.remove("invisible");
        document.getElementById("pais").classList.remove("verificado"); //se llama así para poder llamar al input completo
        document.getElementById("pais").classList.add("errorinput");
        error.classList.add("error");
        error.innerHTML="El pais debe contener al menos 3 caracteres";
        validacion = "error"
        
    }else {
        error.classList.add("invisible");
        document.getElementById("pais").classList.add("verificado");
        validacion = "bien"
       
    }

}



function validacorreo (){
    let correo= document.getElementById("correo").value;
    let error = document.getElementById("error");
    let reg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!reg.test(correo)){

        error.classList.remove("invisible");
        document.getElementById("correo").classList.remove("verificado"); //se llama así para poder llamar al input completo
        document.getElementById("correo").classList.add("errorinput");
        error.classList.add("error");
        error.innerHTML="El correo no es válido";
        validacion = "error"
        
    }else {
        error.classList.add("invisible");
        document.getElementById("correo").classList.add("verificado");
        validacion = "bien"
       
    }
}

function alerta (){
    if (validacion=="bien") {
        alert ('Su mensaje se ha enviado');
    document.getElementById("nombre").value= "";
    document.getElementById("correo").value= "";
    document.getElementById("pais").value= "";
    document.getElementById("apellido").value= "";
    document.getElementById("mensaje").value= "";
    document.getElementById("correo").classList.remove("verificado"); //se llama así para poder llamar al input completo
    document.getElementById("correo").classList.remove("errorinput");
    document.getElementById("pais").classList.remove("verificado"); //se llama así para poder llamar al input completo
    document.getElementById("pais").classList.remove("errorinput");
    document.getElementById("apellido").classList.remove("verificado"); 
    document.getElementById("apellido").classList.remove("errorinput");
    document.getElementById("nombre").classList.remove("verificado"); 
    document.getElementById("nombre").classList.remove("errorinput");
    document.getElementById("error").classList.add("invisible");
    
    }else {
        alert ('Se han encontrado datos incorrectos, por favor vuelva a intentarlo');
    }

    
    
}

