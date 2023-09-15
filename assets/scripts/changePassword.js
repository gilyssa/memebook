function validatePasswords() {
    var newPassword = document.querySelector('.new-password-input').value;
    var confirmNewPassword = document.querySelector('.confirm-new-password-input').value;

    if (newPassword.length < 8 || confirmNewPassword.length < 8) {
        alert("A senha deve conter pelo menos 8 caracteres em ambos os campos.");
    } else if (newPassword !== confirmNewPassword) {
        alert("As senhas não coincidem. Por favor, verifique.");
    } else {
        console.log("Senhas válidas. Nova Senha:", newPassword);
    }
}


