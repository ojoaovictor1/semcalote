import { Sequelize } from "sequelize";
import conn_supabase from "../config/connSupabase.js";

  const Jogos = conn_supabase.define('Jogos', {
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
   Jogos.sync({force: true})
export default Jogos;