import { Sequelize } from "sequelize";
const sequelize = new Sequelize('semcalote', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  const Jogos = sequelize.define('Jogos', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING
    },
    img: {
      type: Sequelize.STRING
    },
    descricao: {
      type: Sequelize.STRING
    },

  })
   //Jogos.sync({force: true})
export default Jogos;