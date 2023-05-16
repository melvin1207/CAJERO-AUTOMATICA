let usuario = JSON.parse(localStorage.getItem("usuario"));
const nombre = document.querySelector('#saldo');
nombre.innerHTML ="$" + usuario.saldo;

const retirar = document.querySelector('#retirar');
const ingresar = document.querySelector('#ingresar');
const salir = document.querySelector('#salir');



retirar.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'retirar.html';
})

ingresar.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'ingresar.html';
})

salir.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
})
