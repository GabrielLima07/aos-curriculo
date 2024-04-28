import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './routes'
import models, { sequelize } from './models'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin("gabriel@gmail.com"),
  };
  next();
})
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/cursos', routes.curso);
app.use('/experiencias', routes.experiencia);
app.use('/idiomas', routes.idioma)

const eraseDatabaseOnSync = process.env.ERASE_DB_ON_SYNC;
const port = process.env.PORT;

sequelize.sync({ force: eraseDatabaseOnSync }).then(() => {
  if (eraseDatabaseOnSync) {
    createUserWithAssociations();
  }
  app.listen(port, () => console.log(`curriculum app listening on port ${port}!`));
});

const createUserWithAssociations = async () => {
  await models.User.create(
    {
      email: "gabriel@gmail.com",
      nome: "Gabriel Vinicius",
      nacionalidade: "Brasileiro",
      idade: 21,
      trabalhando: false,
      cursos: [
        {
          nome: "Lógica de programação e Orientação a Objetos na Softex Recife",
          duracao: "6 meses"
        },
        {
          nome: "Javascript na Softex Recife ",
          duracao: "6 meses"
        }
      ],
      idiomas: [
        {
          lingua: "Inglês",
          nivel: "Fluente"
        }
      ]
    },
    {
      include: [
        models.Curso,
        models.Idioma
      ],
    }
  );

  await models.Experiencia.create({
    cargo: 'Estagiário TI',
    empresa: 'Prefeitura do Recife',
    duracao: '6 meses',
    userId: 1,
  });
};