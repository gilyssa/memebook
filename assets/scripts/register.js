function validateForm(){
    const username= document.querySelector("#username").value;
    const email= document.querySelector("#email").value;
    const password= document.querySelector("#password").value;
    const checkbox = document.querySelector('#checkbox');
    const isChecked = checkbox.checked;

    if(username.length == 0 || email.length == 0 || password.length == 0 || isChecked == false){
        alert("Verifique se preencheu todos os campos!");
    }else{
        console.log('username: ', username);
        console.log('email: ', email);
        console.log('password: ', password);
        console.log("A caixa de seleção está marcada? " + isChecked);
    }
}