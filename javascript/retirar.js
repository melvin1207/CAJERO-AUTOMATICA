let usuario = JSON.parse(localStorage.getItem("usuario"));
const nombre = document.querySelector('#saldo');
nombre.innerHTML ="$" + usuario.saldo;

const retirar = document.querySelector('#retirar');
const regresar = document.querySelector('#regresar');
const salir = document.querySelector('#salir');
let retiro;

retirar.addEventListener('click', (e) => {
    retiro = document.querySelector('#retiro').value;
    usuario.saldo = usuario.saldo - retiro;
    if(usuario.saldo <= 990 && usuario.saldo >= 10){
        console.log(retiro);
        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.href = 'retirar.html';
    }
    else{
        alert ("TU CUENTA NO PUEDE TENER MAS DE $990 O MENOS DE $10, INGRESA OTRO MONTO");
        window.location.href = 'retirar.html';
    }
})

regresar.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'opciones.html';
})

salir.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
})


