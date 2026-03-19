import { Sequelize } from "sequelize";
import conn_supabase from "../config/connSupabase.js";

const Rodada_Intermediaria = conn_supabase.define('Rodada_Intermediaria', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_rodada:{
        type: Sequelize.INTEGER
    },
    id_jogador:{
        type: Sequelize.INTEGER
    },
    id_jogo:{
        type: Sequelize.INTEGER
    }
    })
  export default Rodada_Intermediaria;