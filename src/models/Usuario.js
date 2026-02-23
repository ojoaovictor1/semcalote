import { Sequelize, DataTypes } from "sequelize";
import conn_supabase from "../config/connSupabase.js";

  const Usuario = conn_supabase.define('Usuario', {
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
  Usuario.sync({force: true})
  
export default Usuario;