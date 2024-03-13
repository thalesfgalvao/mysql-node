const db = require('../models/index');
const Pessoa = db.Pessoa;
const PessoaSeguidor = db.PessoaSeguidor;

async function criarPessoaSeguidor(pessoaSeguidor) {
  const pessoaSeguidoerCriado = await PessoaSeguidor.create(pessoaSeguidor);
  console.log(pessoaSeguidoerCriado);
}

async function encontrarPessoa(idPessoa) {
  const pessoaCriada = await Pessoa.findOne({
    where: { id: idPessoa },
    include: [
      {
        model: Pessoa,
        as: 'seguindo',
        through: {
          attributes: [],
        },
      },
      {
        model: Pessoa,
        as: 'seguidores',
        through: {
          attributes: [],
        },
      },
    ],
  });

  console.log(JSON.parse(JSON.stringify(pessoaCriada)));
}

encontrarPessoa(2);

/*criarPessoaSeguidor({
  pessoaId: 2,
  seguePessoaId: 3,
});*/

/*criarPessoaSeguidor({
  pessoaId: 2,
  seguePessoaId: 4,
});*/

/*criarPessoaSeguidor({
  pessoaId: 3,
  seguePessoaId: 2,
});*/
