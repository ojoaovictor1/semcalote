import { Sequelize } from "sequelize";
const sequelize = new Sequelize('teste_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  const Usuario = sequelize.define('Usuario', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    senha: {
      type: Sequelize.STRING
    },
    data_nasc:{
        type: Sequelize.DATE
    }
  })
  //Usuario.sync({force: true})
  
export default Usuario;