import {Sequelize} from 'sequelize';
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
    }
    
  

    })
  //Rodadas.sync({force: true})
  export default Rodadas;