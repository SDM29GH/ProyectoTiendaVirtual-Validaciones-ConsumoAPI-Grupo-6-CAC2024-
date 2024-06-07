function validacionesRegistro() {
    document.getElementById("formRegistro").addEventListener("submit", function(event){
        event.preventDefault();
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
    
        var nombreError = document.getElementById("nombreError");
        var emailError = document.getElementById("emailError");
        var passwordError = document.getElementById("passwordError");
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        nombreError.textContent="";
        emailError.textContent="";
        passwordError.textContent="";
    
        if(nombre.trim()===""){
            nombreError.textContent = "Hay que rellenar el campo. Ingrese su Nombre";
            return;
        }
    
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
    
        //alert("El formulario ha sido enviado.");
        window.location.href = "UsuarioRegistro.html";   
    
    });    
}
