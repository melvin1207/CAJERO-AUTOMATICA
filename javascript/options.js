let usuario = JSON.parse(localStorage.getItem("usuario"));
const nombre = document.querySelector('#name');
nombre.innerHTML = "Hola " + usuario.nombre;

const consult = document.querySelector('#consult');
const input = document.querySelector('#input');
const retire = document.querySelector('#retire');
const reverse = document.querySelector('#return');

consult.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'consultar.html';
})

input.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'ingresar.html';
})

retire.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'retirar.html';
})

reverse.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
})

