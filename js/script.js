'use strict';

// Declare variables
const btnComidas = document.querySelector('.btn-comida');
const btnBebidas = document.querySelector('.btn-bebida');
const btnCafetaria = document.querySelector('.btn-cafetaria');
const btnSandes = document.querySelector('.btn-sandes');
const btnAlcoolicas = document.querySelector('.btn-alcoolicas');
const btnSobremesas = document.querySelector('.btn-sobremesas');
const menu = document.querySelector('.menu');
const comidas = document.querySelector('.comidas');
const bebidas = document.querySelector('.bebidas');
const cafetaria = document.querySelector('.cafetaria');
const sandes = document.querySelector('.sandes');
const alcoolicas = document.querySelector('.alcoolicas');
const sobremesas = document.querySelector('.sobremesas');
const btnInicio = document.querySelector('.btn-back');
const catAtual = document.querySelector('.atual');
const abrirModal = document.querySelectorAll('.abrir-modal');
const filtro = document.querySelector('.filtro');
const modal = document.querySelectorAll('.modal');
const fecharModal = document.querySelectorAll('.fechar-modal');
// const btnMinus = document.querySelector('.btn-minus');
// const btnPlus = document.querySelectorAll('.btn-plus');
const adicionarProduto = document.querySelector('.add');
const produto = document.querySelector('.produtos-carrinho');
const nomeProduto = document.querySelector('.nome-produto');
const quantidadeProduto = document.querySelectorAll('.valor-quantidade');
const precoProduto = document.querySelector('.preco-produto');
const carrinhoVazio = document.querySelector('.carrinho-vazio');
const precoPagamento = document.querySelector('.preco-pay');
const btnPagar = document.querySelector('.btn-pagar');

const mudarMenu = function (categoria) {
    menu.style.display = 'none';
    btnInicio.classList.add('aparece');
    categoria.style.display = 'block';
    catAtual.textContent = categoria.textContent;
};

btnComidas.addEventListener('click', function () {
    mudarMenu(comidas);
});

btnBebidas.addEventListener('click', function () {
    mudarMenu(bebidas);
});

btnCafetaria.addEventListener('click', function () {
    mudarMenu(cafetaria);
});

btnSandes.addEventListener('click', function () {
    mudarMenu(sandes);
});

btnAlcoolicas.addEventListener('click', function () {
    mudarMenu(alcoolicas);
});

btnSobremesas.addEventListener('click', function () {
    mudarMenu(sobremesas);
});

btnInicio.addEventListener('click', function () {
    menu.style.display = 'block';
    comidas.style.display = 'none';
    bebidas.style.display = 'none';
    cafetaria.style.display = 'none';
    sandes.style.display = 'none';
    alcoolicas.style.display = 'none';
    sobremesas.style.display = 'none';
});

const mostraModal = function (elemento) {
    filtro.style.zIndex = 1;
    filtro.style.opacity = 1;
    elemento.classList.toggle('aberto');
};

const escondeModal = function (elemento) {
    filtro.style.zIndex = -1;
    filtro.style.opacity = 0;
    elemento.classList.toggle('aberto');
};

for (let i = 0; i < abrirModal.length; i++) {
    abrirModal[i].addEventListener('click', function () {
        mostraModal(modal[i]);
    });
};

function diminuir() {
    if (quantidadeProduto.textContent > 1) {
        quantidadeProduto.textContent--;
    }
}

window.onload = function () {
    const btnMinus = document.querySelector('.btn-minus');
    btnMinus.addEventListener('click', function () {
        diminuir()
    });
}

function aumentar() {
    quantidadeProduto.textContent++;
}

window.onload = function () {
    const btnPlus = document.querySelector('.btn-plus');
    btnPlus.addEventListener('click', function () {
        aumentar();
    });
}

for (let i = 0; i < fecharModal.length; i++) {
    fecharModal[i].addEventListener('click', function () {
        escondeModal(modal[i]);
    });
};

adicionarProduto.addEventListener('click', function () {

    produto.classList.add('produtos-aberto');
    produto.style.display = 'block';

    const str = precoProduto.textContent;
    const num = parseFloat(str.replace(/,/g, '.'));
    precoProduto.value = num * quantidadeProduto.textContent;
    const precoTotal = new Intl.NumberFormat().format(precoProduto.value);
    // adiciona o produto ao carrinho
    produto.innerHTML = `
    <ul>
        <li>
            <div class="nome-produto-carrinho">${nomeProduto.textContent}</div>
            <div class="quantidade-produto-carrinho">${quantidadeProduto.textContent}x</div>
            <div class="preco-produto-carrinho">${precoTotal}€</div>
            <div class="botoes">
                <button class="editar-produto"><img src="img/edit.svg" alt=""></button>
                <button class="apagar-produto"><img src="img/trash-alt.svg" alt=""></button>
            </div>
        </li>
    </ul>
    `;

    carrinhoVazio.style.display = 'none';
    precoPagamento.innerHTML = `
        ${precoPagamento.value += precoTotal}
        `;


})