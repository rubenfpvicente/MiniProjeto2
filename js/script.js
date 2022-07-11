'use strict';

const btnComidas = document.querySelector('.btn-comida');
const btnBebidas = document.querySelector('.btn-bebida');
const btnCafetaria = document.querySelector('.btn-cafetaria');
const inicio = document.querySelector('.inicio');
const comidas = document.querySelector('.comidas');
const bebidas = document.querySelector('.bebidas');
const cafetaria = document.querySelector('.cafetaria');
const btnInicio = document.querySelector('.btn-back');

const mudarMenu  = function (categoria) {
    inicio.style.display = 'none';
    categoria.style.display = 'block';
}

btnComidas.addEventListener('click', function() {
    mudarMenu(comidas);
});

btnBebidas.addEventListener('click', function() {
    mudarMenu(bebidas);
});

btnCafetaria.addEventListener('click', function() {
    mudarMenu(cafetaria);
});

btnInicio.addEventListener('click', function() {
    inicio.style.display = 'block';
    comidas.style.display = 'none';
    bebidas.style.display = 'none';
    cafetaria.style.display = 'none';
})