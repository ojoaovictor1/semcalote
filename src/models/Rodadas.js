import {Sequelize, DataTypes} from 'sequelize';
import conn_supabase from '../config/connSupabase.js';

  const Rodadas = conn_supabase.define('Rodadas', {
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
  
  export default Rodadas;