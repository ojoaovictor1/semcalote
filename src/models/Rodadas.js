import {Sequelize, DataTypes} from 'sequelize';
const sequelize = new Sequelize('semcalote', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  const Rodadas = sequelize.define('Rodadas', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING
    },
    id_jogo:{
        type: Sequelize.INTEGER
    },
    data:{
        type: Sequelize.DATE
    },
    status: {
        type: Sequelize.ENUM('em_andamento', 'pausada', 'finalizada', 'cancelada', 'nao_iniciada'),
        defaultValue: 'nao_iniciada',
        allowNull: true
      
    },
    
  })
  //Rodadas.sync({force: true})
  export default Rodadas;