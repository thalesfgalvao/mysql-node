'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    //Transaction é usado para que nenhuma linha de código dê erro.
    //Quando qualquer criação de tabela der erro vai cair no catch e cancelar a execução daquele bloco de códigos.
    //TODO o bloco precisa ter sucesso para criar. Se der erro cai no rollback e desfaz a criação das tabelas e atributos.

    try {
      await queryInterface.addColumn(
        'pessoas',
        'rg',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
        { transaction }
      );
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  down: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.removeColumn('pessoas', 'rg', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
