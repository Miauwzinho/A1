const produtos = [
    { id: 1, nome: "Produto 1", preco: 100.00, imagem: "produto1.jpg" },
    { id: 2, nome: "Produto 2", preco: 75.50, imagem: "produto2.jpg" },
    // Add more products here...
  ];
  
  const container = document.querySelector(".produto-container");
  const carrinhoLista = document.getElementById("carrinho-lista");
  const totalCarrinho = document.getElementById("total-carrinho");
  
  function criarProduto(produto) {
    const divProduto = document.createElement("div");
    divProduto.classList.add("produto");
  
    divProduto.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button data-produto-id="${produto.id}">Adicionar ao Carrinho</button>
    `;
  
    divProduto.querySelector("button").addEventListener("click", function() {
      const produtoId = parseInt(this.dataset.produtoId, 10);
      adicionarAoCarrinho(produtoId);
    });
  
    return divProduto;
  }
  
  function adicionarAoCarrinho(produtoId) {
    const produtoSelecionado = produtos.find(produto => produto.id === produtoId);
    if (produtoSelecionado) {
      const itemCarrinho = document.createElement("li");
      itemCarrinho.innerText = `${produtoSelecionado.nome} - R$ ${produtoSelecionado.preco.toFixed(2)}`;
      carrinhoLista.appendChild(itemCarrinho);
  
      // Update total price (implementation depends on your logic)
      let currentTotal = parseFloat(totalCarrinho.innerText.split(": ")[1]);
      currentTotal += produtoSelecionado.preco;
      totalCarrinho.innerText = `Valor Total: R$ ${currentTotal.toFixed(2)}`;
    }
  }
  
  produtos.forEach(produto => container.appendChild(criarProduto(produto)));
  