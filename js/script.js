'use strict';



// TODO: Mudar const para let
// FIXME: Acho que vai ser preciso criar uma lista


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
const cat = document.querySelector('.antigo');
const catAtual = document.querySelector('.atual');
const abrirModal = document.querySelectorAll('.abrir-modal');
const filtro = document.querySelector('.filtro');
const modal = document.querySelectorAll('.modal');
const fecharModal = document.querySelectorAll('.fechar-modal');
const btnMinus = document.querySelectorAll('.btn-minus');
const btnPlus = document.querySelectorAll('.btn-plus');
let adicionarProduto = document.querySelectorAll('.add');
const produto = document.querySelector('.produtos-carrinho');
const nomeProduto = document.querySelectorAll('.nome-produto');
const quantidadeProduto = document.querySelectorAll('.valor-quantidade');
const precoProduto = document.querySelectorAll('.preco-produto');
const carrinhoVazio = document.querySelector('.carrinho-vazio');
const precoPagamento = document.querySelector('.preco-pay');
const btnPagar = document.querySelector('.btn-pagar');
const mediaQuery = window.matchMedia('(min-width: 768px)')

// FIXME: Isto vai fazer a conversão para euros e adicionar o simbolo €
let euro = Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
});

const mudarMenu = function (categoria) {
    menu.style.display = 'none';
    btnInicio.classList.add('aparece');
    if (mediaQuery.matches) {
        cat.style.opacity = 0.29;
    } else {
        cat.style.display = 'none';
    }
    catAtual.style.zIndex = 1;
    catAtual.style.opacity = 1;
    categoria.style.display = 'block';
};

btnComidas.addEventListener('click', function () {
    mudarMenu(comidas);
});

btnBebidas.addEventListener('click', function () {
    mudarMenu(bebidas);
    catAtual.textContent = 'Bebidas';
});

btnCafetaria.addEventListener('click', function () {
    mudarMenu(cafetaria);
    catAtual.textContent = 'Cafetaria';
});

btnSandes.addEventListener('click', function () {
    mudarMenu(sandes);
    catAtual.textContent = 'Sandes';
});

btnAlcoolicas.addEventListener('click', function () {
    mudarMenu(alcoolicas);
    catAtual.textContent = 'Alcoolicas';
});

btnSobremesas.addEventListener('click', function () {
    mudarMenu(sobremesas);
    catAtual.textContent = 'Sobremesas';
});

btnInicio.addEventListener('click', function () {
    menu.style.display = 'block';
    comidas.style.display = 'none';
    bebidas.style.display = 'none';
    cafetaria.style.display = 'none';
    sandes.style.display = 'none';
    alcoolicas.style.display = 'none';
    sobremesas.style.display = 'none';
    btnInicio.classList.remove('aparece');
    if (mediaQuery.matches) {
        cat.style.opacity = 1;
    } else {
        cat.style.display = 'block';
    }
    catAtual.style.zIndex = -1;
    catAtual.style.opacity = 0;
});

const mostraModal = function (elemento) {
    filtro.style.zIndex = 1;
    filtro.style.opacity = 1;
    elemento.classList.add('aberto');
};

const escondeModal = function (elemento) {
    filtro.style.zIndex = -1;
    filtro.style.opacity = 0;
    elemento.classList.remove('aberto');
};

const aumentar = function (elemento) {
    elemento.textContent++;
}

const diminuir = function (elemento) {
    if (elemento.textContent > 1) {
        elemento.textContent--;
    }
}

for (let i = 0; i < abrirModal.length; i++) {
    abrirModal[i].addEventListener('click', function () {
        mostraModal(modal[i]);
    });
};

for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener('click', function () {
        aumentar(quantidadeProduto[i]);
    });
};

for (let i = 0; i < btnMinus.length; i++) {
    btnMinus[i].addEventListener('click', function () {
        diminuir(quantidadeProduto[i]);
    });
}

for (let i = 0; i < fecharModal.length; i++) {
    fecharModal[i].addEventListener('click', function () {
        escondeModal(modal[i]);
    });
};

let carrinho = [];

let addProduto = function (nome, quantidade, preco) {
    let produto_list = {
        nome: nome,
        quantidade: quantidade,
        preco: parseFloat(preco.replace(/,/g, '.'))
    };

    carrinho.push(produto_list);
    console.log(carrinho);
}

let addCarrinho = function () {
    for (let i = 0; i < carrinho.length; i++) {
        produto.classList.add('produtos-aberto');
        produto.style.display = 'block';
        // let str = carrinho[i].preco;
        // let num = parseFloat(str.replace(/,/g, '.'));
        carrinho[i].preco *= carrinho[i].quantidade;

        produto.innerHTML = `
    <ul>
        <li>
            <div class="nome-produto-carrinho" id="name-produto">${carrinho[i].nome}</div>
            <div class="quantidade-produto-carrinho" id="quantity-produto">${carrinho[i].quantidade}x</div>
            <div class="preco-produto-carrinho" id="value-produto">${euro.format(carrinho[i].preco)}</div>
            <div class="botoes" id="editar-produto">
                <button class="editar-produto"><img src="img/edit.svg" alt=""></button>
                <button class="apagar-produto" onclick="apagar();"><img src="img/trash-alt.svg" alt=""></button>  
            </div>
        </li>
    </ul>
    `;
        carrinhoVazio.style.display = 'none';
        precoPagamento.value += carrinho[i].preco;

        if (precoPagamento != carrinho[i].preco) {
            precoPagamento.textContent = euro.format(carrinho[i].preco);
        } else {
            precoPagamento.textContent = euro.format(carrinho[i].preco);
        }

        let btnEditar = document.querySelectorAll('.editar-produto');

        for (let i = 0; i < btnEditar.length; i++) {
            btnEditar[i].addEventListener('click', function () {
                mostraModal(modal[i]);
            });
        }

        let btnApagar = document.querySelectorAll('.apagar-produto');

        for (let i = 0; i < btnApagar.length; i++) {
            btnApagar[i].addEventListener('click', function () {
                apagar();
            });
        }
    }
}



for (let i = 0; i < adicionarProduto.length; i++) {
    adicionarProduto[i].addEventListener('click', function () {
        addProduto(nomeProduto[i].textContent, quantidadeProduto[i].textContent, precoProduto[i].textContent);
        addCarrinho();

    });
};

// let addProduto = function (nome, quantidade, preco) {
//     let produto = {
//         nome: nome,
//         quantidade: quantidade,
//         preco: preco
//     };
//     carrinho.push(produto);
// }

// for (let i = 0; i < adicionarProduto.length; i++) {
//     adicionarProduto[i].addEventListener('click', function () {
//         addProduto(nomeProduto[i].textContent, quantidadeProduto[i].textContent, precoProduto[i].textContent);
//         produto.style.display = 'block';
//         carrinhoVazio.style.display = 'none';
//         precoPagamento.textContent = euro.format(carrinho.reduce(function (total, produto) {
//             return total + parseFloat(produto.preco);
//         }
//             , 0));

//     });
// }

//     



let editarProduto = document.querySelector('.editar-produto');
let apagarProduto = document.querySelector('.apagar-produto');

function apagar() {
    // futuramente vai precisar de um for para ir buscar o nome ou id senão irá apagar tudo
    let quantity = document.querySelector("#quantity-produto");
    let name = document.querySelector("#name-produto");
    let value = document.querySelector("#value-produto");
    let edit = document.querySelector("#editar-produto");
    quantity.textContent = "";
    name.textContent = "";
    value.textContent = "";
    edit.textContent = "";
    carrinho.pop();
}

const btnConfirmar = document.querySelector('.btn-confirmar');

btnConfirmar.addEventListener('click', function () {
    menu.style.display = 'block';
    comidas.style.display = 'none';
    bebidas.style.display = 'none';
    cafetaria.style.display = 'none';
    sandes.style.display = 'none';
    alcoolicas.style.display = 'none';
    sobremesas.style.display = 'none';
    btnInicio.classList.remove('aparece');
    if (mediaQuery.matches) {
        cat.style.opacity = 1;
    } else {
        cat.style.display = 'block';
    }
    catAtual.style.zIndex = -1;
    catAtual.style.opacity = 0;
    produto.innerHTML = "";
    carrinhoVazio.style.display = 'block';
    precoPagamento.textContent = "0,00€";
    carrinho = [];
}
);

const expandBtn = document.querySelector('.expand-btn');
const lista = document.querySelector('.expand');

expandBtn.addEventListener('click', () => {
    lista.classList.toggle('lista');
    expandBtn.classList.toggle('aberto');

});