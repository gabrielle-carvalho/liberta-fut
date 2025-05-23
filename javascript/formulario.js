function validarFormulario() {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const repetirSenha = document.getElementById("repetirSenha").value.trim();

    const mensagemErro = document.getElementById("mensagemErro");
    const mensagemErro2 = document.getElementById("mensagemErro2");
    const boasVindas = document.getElementById("boasvindas");

    mensagemErro.textContent = "";
    mensagemErro2.textContent = "";
    boasVindas.textContent = "";

    if (!email || !senha || !repetirSenha) {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
        return false;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
        mensagemErro.textContent = "Digite um e-mail válido.";
        return false;
    }

    if (senha !== repetirSenha) {
        mensagemErro2.textContent = "As senhas não coincidem.";
        return false;
    }

    boasVindas.textContent = "Bem-vindo à Liberta Fut!";
    return true;
}
