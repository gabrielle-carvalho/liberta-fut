function validarFormulario() {

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var repetirSenha = document.getElementById("repetirSenha").value;
    var mensagemErro = document.getElementById("mensagemErro");
    var mensagemErro2 = document.getElementById("mensagemErro2");
    
    mensagemErro2.innerHTML = "";
    mensagemErro.innerHTML = "";
    boasvindas.innerHTML = ""

    if (email === "" || senha === "" || repetirSenha === "") {
      mensagemErro.innerHTML = "Por favor, preencha todos os campos.";
      return false;
    }else if (senha !== repetirSenha && !email.endsWith("@gmail.com")){
      mensagemErro.innerHTML = "As senhas devem ser iguais" ;
      mensagemErro2.innerHTML = "Email Invalido" ;
      return false;
    }else if (senha !== repetirSenha) {
      mensagemErro.innerHTML = "As senhas devem ser iguais";
      return false;
    }else if (!email.endsWith("@gmail.com")) {
      mensagemErro.innerHTML = "Email Invalido";
      return false;
    }else{
        boasvindas.innerHTML = "Email Cadastrado!";
    }
    
  }