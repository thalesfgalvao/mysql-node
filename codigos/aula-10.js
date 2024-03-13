const db = require('../models/index');
const Pessoa = db.Pessoa;

async function criarPessoa() {
  const t = await db.sequelize.transaction();
  try {
    await Pessoa.create(
      {
        nome: 'Joaquim',
        sobrenome: 'Ribeiro',
        cpf: '222.222.222-22',
        email: 'joaquim@gmail.com',
        rg: '1234568',
      },
      { transaction: t }
    );
    await Pessoa.create(
      {
        nome: 'Marina',
        sobrenome: 'Ribeiro',
        cpf: '333.333.333-33',
        email: 'marina@gmail.com',
        rg: '1234568',
      },
      { transaction: t }
    );
    console.log(jkdksj);
    await t.commit();
    console.log('Pessoas criadas');
  } catch (error) {
    await t.rollback();
    console.log('Ocorreu um erro:', error);
  }
}

async function criarPessoasTransaction() {
  try {
    const result = await db.sequelize.transaction(async (t) => {
      await Pessoa.create(
        {
          nome: 'Roberto',
          sobrenome: 'Ribeiro',
          cpf: '222.222.222-22',
          email: 'roberto@gmail.com',
          rg: '1234568',
        },
        { transaction: t }
      ),
        await Pessoa.create(
          {
            nome: 'Ana',
            sobrenome: 'Ribeiro',
            cpf: '222.222.222-22',
            email: 'ana@gmail.com',
            rg: '1234568',
          },
          { transaction: t }
        );
      return true;
    });
    console.log('Usuários cadastrados');
  } catch (error) {
    console.log(error);
  }
}

// criarPessoasTransaction();
// criarPessoa();
