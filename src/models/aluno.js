import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init (sequelize) {
    super.init({

      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres'
          },
        },
      },

      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'SobreNome precisa ter entre 3 e 255 caracteres'
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe'
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido'
          },
        },
      },

      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisar ser um número inteiro'
          },
        },
      },

      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Idade precisar ser um número inteiro ou ponto flutuante'
          },
        },
      },

      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Autura precisar ser um número inteiro ou ponto flutuante'
          },
        },
      },
    }, {
        sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id'});
  }
}
