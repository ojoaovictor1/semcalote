import { Sequelize, DataTypes  } from "sequelize";
//importar conexao supabase
import conn_supabase from "../src/config/connSupabase.js";

// const sequelize = new Sequelize('semcalote', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });

const Jogadores = conn_supabase.define('Jogadores', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING
    },
    creditos: {
        type: Sequelize.INTEGER
    },
    ranking: {
        type: Sequelize.ENUM('bronze', 'prata', 'ouro', 'diamante'),
        defaultValue: 'bronze',
        allowNull: true
    },
    data_nasc: {
        type: Sequelize.DATE
    },
    chave_pix: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.ENUM('ativo', 'inativo'),
        defaultValue: 'ativo',
        allowNull: true
    }

  })
  //Jogadores.sync({force: true})
  export default Jogadores;

