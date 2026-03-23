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
const form = document.getElementById('form-cadastro');
const tabela = document.querySelector('#tabela-clientes tbody');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Captura os valores dos inputs
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;

    // Cria os elementos da tabela
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td>${cpf}</td>
        <td><button class="btn-excluir">Remover</button></td>
    `;

    // Adiciona a funcionalidade de remover ao botão da linha
    novaLinha.querySelector('.btn-excluir').addEventListener('click', function() {
        novaLinha.remove();
    });

    // Adiciona a linha na tabela
    tabela.appendChild(novaLinha);

    // Limpa o formulário
    form.reset();
});
