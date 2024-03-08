const db = require('../models/index');
const Pessoa = db.Pessoa;

function criarPessoa() {
  const pessoas = [
    {
      nome: 'Joao',
      sobrenome: 'Silva',
      cpf: '111.111.111-11',
      email: 'joao@gmail.com',
      rg: '12.345.678.9',
    },
    {
      nome: 'Larissa',
      sobrenome: 'Manoela',
      cpf: '123.456.789.00',
      email: 'larissa@gmail.com',
      rg: '00.000.000-0',
    },
    {
      nome: 'Thales',
      sobrenome: 'Fernando',
      cpf: '486.049.008-88',
      email: 'thales@gmail.com',
      rg: '56.477.528-9',
    },
  ];
  Pessoa.bulkCreate(pessoas).then((pessoaCriada) => console.log(pessoaCriada));
}

criarPessoa();
