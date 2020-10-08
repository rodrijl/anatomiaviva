function validarEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function enviarFormulario(){
    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');

    var errorNombre = document.getElementById('errorNombre');
    var errorCorreo = document.getElementById('errorCorreo');


    if(nombre.value === null || nombre.value === ''){        
        errorNombre.innerHTML= 'Ingrese Nombre';
    } else {
        errorNombre.innerHTML = '';
    }
    if(correo.value === null || correo.value === ''){
        errorCorreo.innerHTML = 'Ingrese Correo';
    }else{
        errorCorreo.innerHTML = '';
        if(!validarEmail(correo.value)){
            errorCorreo.innerHTML = 'Correo no válido, siga el siguiente formato example@correo.com';
        }else{
            errorCorreo.innerHTML = '';
            
        }
    }
    if(telefono.value === null || telefono.value === ''){
        errorTelefono.innerHTML = 'Ingrese Número de Teléfono';
    }else{
        errorTelefono.innerHTML = '';
    }
    if(mensaje.value === null || mensaje.value === ''){
        errorMensaje.innerHTML = 'Por favor escriba un mensaje';
    }else{
        errorMensaje.innerHTML = '';
    }

    return false;
}