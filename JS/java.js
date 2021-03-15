function validar() {
    var nombre = document.getElementById("name").value;
    var mensaj = document.getElementById("mensaje").value;
    var correo = document.getElementById("mail").value;
    var celular = document.getElementById("Telf_movil").value;

   
    if (nombre == "") {
        document.getElementById("error_nombre").innerHTML = "PORFAVOR LLENE EL CAMPO NOMBRE"
        document.getElementById("error_nombre").style.color = "red";
        document.getElementById("name").focus();
       
    }
    else {
        document.getElementById("error_nombre").innerHTML = ""
    }


  
    if (mensaj == "") {

        document.getElementById("error_mensaje").innerHTML = "PORFAVOR LLENE EL CAMPO DE MENSAJE"
        document.getElementById("error_mensaje").style.color = "red";
        document.getElementById("mensaje").focus();
        
    }
    else {
        document.getElementById("error_cedula").innerHTML = ""
    }


if (correo == "") {
        document.getElementById("error_correo").innerHTML = "PORFAVOR ESCRIBA SU CORREO"
        document.getElementById("error_correo").style.color = "red";
        document.getElementById("mail").focus();
        
    }
    else {
        document.getElementById("error_correo").innerHTML = ""

        

    }

    
    if (celular == "") {
        document.getElementById("error_celular").innerHTML = "PORFAVOR LLENE EL CAMPO TELEFONO"
        document.getElementById("error_celular").style.color = "red";
        document.getElementById("Telf_movil").focus();
       return false
    }
    else {
        document.getElementById("error_celular").innerHTML = ""
    }

    
    }