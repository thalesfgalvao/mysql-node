const db = require('../models/index');
const Pessoa = db.Pessoa;

//Operadores do sequelize
const Op = db.Sequelize.Op;

function encontrarPorId(id) {
  // SELECT * FROM pessoas WHERE id = 500;

  Pessoa.findByPk(id).then((pessoa) => {
    console.log('\n \n \n');
    console.log(JSON.stringify(pessoa));
  });
}

function encontrarPorNome(nome) {
  // SELECT * FROM pessoas WHERE name = 'Jerrie';

  //findOne retorna apenas um OBJETO
  Pessoa.findOne({
    // Os atributos é o que será retornado, por exemplo:
    //SELECT nome, sobrenome FROM pessoas WHERE nome = 'Jerrie'
    attributes: ['nome', 'sobrenome'],
    where: {
      nome: nome,
    },
    //Esse raw remove o "lixo" que eu não quero que seja retornado
    raw: true,
  }).then((pessoa) => {
    console.log('\n \n \n');
    console.log(JSON.stringify(pessoa));
  });
}

function encontrarComIdIn(arrayIds) {
  // SELECT * FROM pessoas WHERE id IN (1,2,3,4,5);

  //findAll traz todos os registros em forma de array, sendo assim, devo procurar filtrando com "in"
  Pessoa.findAll({
    where: {
      id: arrayIds,
    },
    //Esse raw remove o "lixo" que eu não quero que seja retornado
    raw: true,
  }).then((pessoa) => {
    console.log('\n \n \n');
    console.log(JSON.stringify(pessoa));
  });
}

function encontrarComOffsetLimit() {
  // SELECT * FROM pessoas LIMIT 10 OFFSET 990
  Pessoa.findAll({
    //Offset: vai trazer a partir de um numero. 991 pra frente no exemplo abaixo
    offset: 990,
    limit: 10,
    raw: true,
  }).then((pessoa) => {
    console.log('\n \n \n');
    console.log(JSON.stringify(pessoa));
  });
}

// Operadores no Sequelize

function encontrarComLike() {
  // SELECT * FROM pessoas WHERE nome LIKE 'Ro%' LIMIT 10
  // A consulta procura tudo que começa com Ro antes do %

  Pessoa.findAll({
    where: {
      nome: {
        [Op.like]: 'Ro%',
      },
    },
    limit: 10,
    raw: true,
  }).then((pessoa) => {
    console.log('\n \n \n');
    console.log(JSON.stringify(pessoa));
  });
}

function encontrarUtilizandoOperadores() {
  // SELECT * FROM pessoas WHERE id <= 5 OR sobrenome = "Harpham"
  // Combinação de operadores. Vai procurar onde o id seja menor ou igual que 5 OU tenha o sobrenome Harpham

  Pessoa.findAll({
    where: {
      //Ao usar o operador OR sempre colocar em um ARRAY de OBJETOS
      [Op.or]: [
        {
          id: {
            [Op.lte]: 5,
          },
          sobrenome: 'Harpham',
        },
      ],
    },
    raw: true,
  }).then((pessoa) => {
    console.log('\n \n \n');
    console.log(JSON.stringify(pessoa));
  });
}
