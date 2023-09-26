var inputUsuario = document.getElementById("user");

inputUsuario.addEventListener("keydown", function(event) {

  if (event.key === " ") {
    event.preventDefault(); 
  }
});

var inputSenha = document.getElementById("password");

inputSenha.addEventListener("keydown", function(event) {

  if (event.key === " ") {
    event.preventDefault(); 
  }
});

function validarForm(event) {
    event.preventDefault(); 
    const usuario = document.getElementById('user').value;
    const senha = document.getElementById('password').value;

    console.log('Usuário: ' + usuario);
    console.log('Senha: ' + senha);
}

document.getElementById("botao-entrar").addEventListener("click", function() {
    validarLogin();
});
  
function validarLogin() {
    var usuario = document.getElementById("user").value;
    var senha = document.getElementById("password").value;
    var aviso = document.getElementById("aviso");
  
    if (usuario.trim() === "" || senha.trim() === "") {
      aviso.style.display = "block";
    } 
}

document.getElementById("esqueci-senha").addEventListener("click", function() {
    redefinirSenha();
});
  
function redefinirSenha() {
    if (confirm('Você será redirecionado para redefinir sua senha. Deseja prosseguir?')) {
        window.location.href = "http://127.0.0.1:5500/pages/sendCode.html";
    } 
}

document.getElementById("registre-se").addEventListener("click", function() {
    fazerCadastro();
});
  
function fazerCadastro() {
    if (confirm('Você será redirecionado para criar um cadastro! Deseja prosseguir? =)')) {
        window.location.href = "http://127.0.0.1:5500/pages/register.html";
    } 
}