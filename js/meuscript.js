function validaLogin() {
    var user = "Admin";
    var pass = "1234";
    if(user === document.forms ["validalogin"]["usuario"].value && 
        pass === document.forms ["validalogin"]["senha"].value){
        alert("Login bem-sucedido!");
        return true;
    } else {
        alert("Login falhou! Verifique seu nome de usuário e senha.");
        return false;
    }
}    