import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs'

export default class User extends Model {
  static init (sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'Campo nome deve ter entra 3 e 50 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe'
        },
        validate: {
          isEmail: {
            msg: 'Email invalido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entra 3 e 50 caracteres',
          },
        },
      },
    }, {
        sequelize,
    });

    this.addHook('beforeSave', async user => {
      if (user.password)
      user.password_hash = await bcryptjs.hash(user.password, 8);
    } )


    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
