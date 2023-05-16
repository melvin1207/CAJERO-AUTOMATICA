let usuario = JSON.parse(localStorage.getItem("usuario"));
const nombre = document.querySelector('#saldo');
nombre.innerHTML ="$" + usuario.saldo;

const ingresar = document.querySelector('#ingresar');
const regresar = document.querySelector('#regresar');
const salir = document.querySelector('#salir');
let ingreso = 0;


ingresar.addEventListener('click', (e) => {
    e.preventDefault();
    ingreso = document.querySelector('#ingreso').value;
    usuario.saldo = usuario.saldo + Number(ingreso); 
    console.log(usuario.saldo)
    if(usuario.saldo <= 990 && usuario.saldo >= 10){
        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.href = 'ingresar.html';
    }
    else{
        alert ("TU CUENTA NO PUEDE TENER MAS DE $990 O MENOS DE $10, INGRESA OTRO MONTO");
        window.location.href = 'ingresar.html';
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