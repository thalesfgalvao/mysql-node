const db = require('../models/index');
const Pessoa = db.Pessoa;

//Funções de adicionar, alterar e deletar registros em um banco de dados.

function criarPessoa() {
  Pessoa.create({
    nome: 'Joao',
    sobrenome: 'Silva',
    cpf: '111.111.111-11',
    email: 'joao@gmail.com',
    rg: '1234568',
  }).then((pessoaCriada) => console.log(pessoaCriada));
}

function atualizarPessoa(id) {
  Pessoa.update(
    {
      cpf: '000.000.000-00',
      rg: '12.345.678-9',
    },
    {
      where: {
        id: id,
      },
    }
  ).then((pessoa) => console.log(pessoa));
}

function deletarPessoa(id) {
  Pessoa.destroy({
    where: {
      id,
    },
  });
}

//deletarPessoa(1);
//atualizarPessoa(1);
//criarPessoa();
