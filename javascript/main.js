let cuentas = [
    { nombre: "Juan", saldo: 900, password: "1234dfg" },
    { nombre: "Pedro", saldo: 500, password: "pass" },
    { nombre: "Melvin", saldo: 700, password: "jkhkl" },
    { nombre: "Shira", saldo: 700, password: "123456" },
];

const form = document.querySelector('#loginForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formElements = e.target.elements;
    const formData = {};

    for (const element of formElements) {
        if (element.name) {
            formData[element.name] = element.value;
        }
    }

    if(cuentas[0].nombre === formData.userName && cuentas[0].password === formData.userPassword){
        localStorage.setItem("usuario", JSON.stringify(cuentas[0]));
        window.location.href = 'opciones.html';
    } 
    else if(cuentas[1].nombre === formData.userName && cuentas[1].password === formData.userPassword){
        localStorage.setItem("usuario", JSON.stringify(cuentas[1]));
        window.location.href = 'opciones.html';
    } 
    else if(cuentas[2].nombre === formData.userName && cuentas[2].password === formData.userPassword){
        localStorage.setItem("usuario", JSON.stringify(cuentas[2]));
        window.location.href = 'opciones.html'; 
    } 
    else if(cuentas[3].nombre === formData.userName && cuentas[3].password === formData.userPassword){
        localStorage.setItem("usuario", JSON.stringify(cuentas[3]));
        window.location.href = 'opciones.html';
  
    } else{
        alert("Incorrecto")
    }
});

















