// Seleciona o formulário e o corpo da tabela
const form = document.getElementById('clienteForm');
const tabelaCorpo = document.querySelector('#tabelaClientes tbody');

// Escuta o evento de envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página recarregue

    // Captura os dados digitados
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Adiciona o cliente na interface
    adicionarLinhaNaTabela(nome, email);

    // Limpa os campos do formulário
    form.reset();
});

// Função para criar a linha HTML e inserir na tabela
function adicionarLinhaNaTabela(nome, email) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td>
            <button class="btn-delete" onclick="removerCliente(this)">Excluir</button>
        </td>
    `;

    tabelaCorpo.appendChild(tr);
}

// Função para remover a linha da tabela
function removerCliente(botao) {
    const linha = botao.closest('tr');
    linha.remove();
}
