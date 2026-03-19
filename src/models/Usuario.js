import { Sequelize, DataTypes } from "sequelize";
import conn_supabase from "../config/connSupabase.js";

  const Usuario = conn_supabase.define('Usuarios', {
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
  
export default Usuario;