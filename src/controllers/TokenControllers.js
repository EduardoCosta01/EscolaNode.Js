import User from '../models/User'
import jwc from 'jsonwebtoken';

class TokenController {
  async store(req, res) {
    const { email = '', password = ''} = req.body;

      if (!email || !password) {
        return res.status(401).json({
        errors: ['Credencias invalidas'],
      });
    };

    const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
        errors: ['Usuário invalida'],
      });
    };

    if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
        errors: ['Senha invalida'],
      });
    }

    const { id } = user;
    const token = jwc.sign({ id, email}, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  };
};

export default new TokenController();
