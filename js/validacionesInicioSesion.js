
function validacionesInicioSesion() {
    document.getElementById("formInicioSesion").addEventListener("submit", function(event){
        event.preventDefault();
        
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
    
        var emailError = document.getElementById("emailError");
        var passwordError = document.getElementById("passwordError");
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        emailError.textContent="";
        passwordError.textContent="";
    
        if(email.trim()===""){
            emailError.textContent = "Hay que rellenar el campo. Ingrese su Email";
            return;
        }
    
        if(!regexEmail.test(email)){
            emailError.textContent = "Hay que cumplir con el requisito de registro de email";
            return;
        }
    
        if(password.trim()===""){
            passwordError.textContent = "Hay que rellenar el campo. Ingrese su Contraseña";
            return;
        }

        window.location.href = "Usuario.html";
        //window.location.href = '/';
    
        //alert("El formulario ha sido enviado.");
    
    });    
}

