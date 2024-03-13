'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoa.hasOne(models.Endereco, { foreingKey: 'pessoaId' }); //Relação 1:1, uma pessoa POSSUI UM 'endereço.
      Pessoa.hasMany(models.Telefone, { foreingKey: 'pessoaId' }); //Relação 1:n, uma pessoa POSSUI vários telefones
      Pessoa.belongsToMany(models.Pessoa, {
        through: 'pessoa_seguidores',
        foreignKey: 'pessoaId',
        as: 'seguindo',
      });
      Pessoa.belongsToMany(models.Pessoa, {
        through: 'pessoa_seguidores',
        foreignKey: 'seguePessoaId',
        as: 'seguidores',
      });
    }
  }
  Pessoa.init(
    {
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      email: DataTypes.STRING,
      rg: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Pessoa',
      tableName: 'pessoas',
    }
  );
  return Pessoa;
};
