function submitForm() {
    let arrayCodes = [];
    let code1 = document.querySelector('#cod1').value;
    let code2 = document.querySelector('#cod2').value;
    let code3 = document.querySelector('#cod3').value;
    let code4 = document.querySelector('#cod4').value;
    let code5 = document.querySelector('#cod5').value;
    let code6 = document.querySelector('#cod6').value;

    arrayCodes.push(code1, code2, code3, code4, code5, code6)
    if (!arrayIsNumber(arrayCodes)) {
        alert('Por favor digite apenas numeros no campo do código.')
    } else {
        console.log(arrayCodes);
    }
}


function arrayIsNumber(array) {
    const resultado = array.every(function (item) {
        return !isNaN(item);
    });

    return resultado;
}

function submitEmail() {
    const emailInput = document.querySelector("#taskname").value;
    if(validEmail(emailInput)){
        console.log(emailInput);  
    } else{
        alert("Insira um e-mail válido.")
    }
   
}

function validEmail(email){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}