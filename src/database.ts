import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not defined');
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
});

export default sequelize;
