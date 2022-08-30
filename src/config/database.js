require ('dotenv').config();

module.exports = {
  username: 'root',
  password: '123456',
  database: 'escola',
  host: '127.0.0.1',
  dialect: 'mysql',
  define: {
    timesTamps: true,
    underscored: true,
    underscoredAll: true,
    'creatdAt': 'creatd_at',
    'updatedAt': 'updated_at',
  }

};
