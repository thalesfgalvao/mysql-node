const db = require('../models/index');
const Pessoa = db.Pessoa;
const Telefone = db.Telefone;
const Endereco = db.Endereco;

async function adicionarTelefone(telefone) {
  const telefoneCriado = await Telefone.create(telefone);
  console.log(telefoneCriado);
}

async function encontrarPessoaComTelefone(idPessoa, idTelefone) {
  const pessoa = await Pessoa.findOne({
    where: { id: idPessoa },
    include: [
      {
        model: Telefone,
      },
      {
        model: Endereco,
      },
    ],
    nest: true,
  });
  console.log(JSON.parse(JSON.stringify(pessoa)));
}

encontrarPessoaComTelefone(1, 3);

/*adicionarTelefone({
  numero: '21933762543',
  pessoaId: 1,
});*/
