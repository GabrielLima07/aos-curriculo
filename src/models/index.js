import "dotenv/config";
import { Sequelize } from 'sequelize';

import getUserModel from './user';
import getCursoModel from './curso';
import getExperienciaModel from './experiencia';
import getIdiomaModel from './idioma';


const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSSWORD,
  {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
  },
);

const models = {
  User: getUserModel(sequelize, Sequelize),
  Curso: getCursoModel(sequelize, Sequelize),
  Experiencia: getExperienciaModel(sequelize, Sequelize),
  Idioma: getIdiomaModel(sequelize, Sequelize),
}

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
})

export { sequelize };

export default models;