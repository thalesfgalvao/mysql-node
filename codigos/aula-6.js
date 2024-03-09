// Raw query é uma ferramenta para queries mais complexas usando Group by, subselect e etc.
const db = require('../models/index');
const sequelize = db.sequelize;

function encontrarPorId(idPessoa) {
  // SELECT * FROM pessoas WHERE id = 500;

  // Recebe doios parâmetros: A consulta e as options da consulta
  sequelize
    .query('SELECT * FROM pessoas WHERE id = :id', {
      // Replacement passa a informação que eu quero na consulta ao invés de hard coded (WHERE id = 500)
      replacements: { /*Atributo*/ id: /*Variável*/ idPessoa },
      type: sequelize.Querytypes.SELECT,
      raw: true,
      //A option "plain" retorna apenas um objeto e não um Array. É utilizado para mostrar UM resultaodo.
      plain: true,
    })
    .then((pessoa) => {
      console.log('\n \n \n');
      console.log(pessoa);
    });
}

function encontrarPorNome(nomePessoa) {
  // SELECT * FROM pessoas WHERE nome = 'Jerrie';

  sequelize
    .query('SELECT * FROM pessoas WHERE nome = :nome', {
      // Replacement passa a informação que eu quero na consulta ao invés de hard coded (WHERE nome = 'Jerrie')
      replacements: { /*Atributo*/ nome: /*Variável*/ nomePessoa },
      type: sequelize.Querytypes.SELECT,
      raw: true,
      //A option "plain" retorna apenas um objeto e não um Array. É utilizado para mostrar UM resultaodo.
      plain: true,
    })
    .then((pessoa) => {
      console.log('\n \n \n');
      console.log(pessoa);
    });
}

function encontrarComIdIn(arrayIds) {
  // SELECT * FROM pessoas WHERE id IN (1,2,3,4,5);

  sequelize
    .query('SELECT * FROM pessoas WHERE id IN (:arrayIds)', {
      // Replacement passa a informação que eu quero na consulta ao invés de hard coded (WHERE id IN (:id))
      replacements: { arrayIds },
      type: sequelize.Querytypes.SELECT,
      raw: true,
    })
    .then((pessoa) => {
      console.log('\n \n \n');
      console.log(pessoa);
    });
}

function encontrarComOffsetLimit() {
  // SELECT * FROM pessoas LIMIT 10 OFFSET 990

  sequelize
    .query('SELECT * FROM pessoas LIMIT 10 OFFSET 990', {
      type: sequelize.Querytypes.SELECT,
      raw: true,
    })
    .then((pessoa) => {
      console.log('\n \n \n');
      console.log(pessoa);
    });
}

// Operadores no Sequelize

function encontrarComLike(replacements) {
  // SELECT * FROM pessoas WHERE nome LIKE 'Ro%' LIMIT 10

  sequelize
    .query('SELECT * FROM pessoas WHERE nome LIKE :nome LIMIT :limit', {
      replacements: replacements,
      type: sequelize.Querytypes.SELECT,
      raw: true,
    })
    .then((pessoa) => {
      console.log('\n \n \n');
      console.log(pessoa);
    });
}
function encontrarUtilizandoOperadores() {
  // SELECT * FROM pessoas WHERE id <= 5 OR sobrenome = "Harpham"

  sequelize
    .query('SELECT * FROM pessoas WHERE id <= :id OR sobrenome = :sobrenome', {
      replacements,
      type: sequelize.Querytypes.SELECT,
      raw: true,
    })
    .then((pessoa) => {
      console.log('\n \n \n');
      console.log(pessoa);
    });
}

// encontrarPorId(500);
// encontrarPorNome('Jerrie')
// encontrarComIdIn([1, 2, 3, 4, 5])
// encontrarComOffsetLimit()

/*encontrarComLike({
  nome: 'Ro%',
  limit: 10,
});*/

/*encontrarUtilizandoOperadores({
    id: 5,
    sobrenome: 'Harpham'
})*/
