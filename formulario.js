function validarEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function enviarFormulario(){
    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var telefono = document.getElementById('telefono');
    var mensaje = document.getElementById('mensaje');

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
    
    if (errorNombre.innerHTML === '' && errorCorreo.innerHTML === '' && errorTelefono.innerHTML === '' && errorMensaje.innerHTML === '') {
        sendEmail(nombre.value, correo.value, telefono.value, mensaje.value);
    }

    return false;
}

function sendEmail(nombre, correo, telefono, mensaje) {
    var templateParams = {
        name: nombre,
        email: correo,
        phone: telefono,
        message: mensaje,
    };
        
    emailjs.send('Anatomia Viva', 'template_ae3w70p', templateParams)
        .then(function(response) {
            alert('Tu mensaje ha sido enviado!');
        }, function(error) {
            alert('Error: Tu mensaje no fue enviado, porfavor inténtalo nuevamente');
        });
}
