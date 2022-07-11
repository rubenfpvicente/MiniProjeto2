'use strict';

const btnComidas = document.querySelector('.btn-comida');
const inicio = document.querySelector('.inicio');
const comidas = document.querySelector('.comidas');

btnComidas.addEventListener('click', function() {
    inicio.style.display = 'none';
    comidas.style.display = 'inline';
});