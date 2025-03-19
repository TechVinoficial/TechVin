let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarCarrinho(servico, preco) {
    carrinho.push({ servico, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Armazenar no localStorage
    alert(`${servico} adicionado ao carrinho!`);
    exibirCarrinho(); // Atualizar a exibição do carrinho
}

function removerCarrinho(index) {
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualizar no localStorage
    alert('Serviço removido do carrinho!');
    exibirCarrinho();
}

function exibirCarrinho() {
    const carrinhoContainer = document.getElementById('itens-carrinho');
    carrinhoContainer.innerHTML = '';

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        carrinho.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item-carrinho');
            itemElement.innerHTML = `
                <p>${item.servico} - ${item.preco}</p>
                <button onclick="removerCarrinho(${index})">Remover</button>
            `;
            carrinhoContainer.appendChild(itemElement);
        });
    }
}

// Chame a função para exibir o carrinho ao carregar a página
window.onload = exibirCarrinho;