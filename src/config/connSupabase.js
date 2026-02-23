const sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.SUPABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
})
export default conn_supabase;

//
