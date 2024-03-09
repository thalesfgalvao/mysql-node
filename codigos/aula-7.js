const db = require('../models/index');
const Pessoa = db.Pessoa;
const Endereco = db.Endereco;

async function adicionarEndereco(endereco) {
  const enderecoCriado = await Endereco.create(endereco);
  console.log('\n \n \n');
  console.log(enderecoCriado);
}

async function procurarEnderecoPorId(enderecoId) {
  const endereco = await Endereco.findOne({
    where: { id: enderecoId },
    raw: true,
    include: [
      {
        model: Pessoa,
      },
    ],
    //Alinhar o objeto e trazer as informações formatadsas
    nest: true,
    logging: true,
  });
  console.log(endereco);
}

async function procurarPessoasPorEndereco() {
  const pessoa = await Pessoa.findAll({
    include: [
      {
        model: Endereco,
        // Transforma o LEFT em INNER JOIN. Só vai trazer os resultados que possuem um endereço
        required: true,
      },
    ],
    //Alinhar o objeto e trazer as informações formatadsas
    nest: true,
    raw: true,
  });
  console.log(pessoa);
}

/*adicionarEndereco({
  bairro: 'Bairro Dois',
  estado: 'Dois',
  cidade: 'Cidade DOis',
  rua: 'Rua Dois',
  numero: '2',
  pessoaId: 2,
});*/
// procurarEnderecoPorId(1);
procurarPessoasPorEndereco();
