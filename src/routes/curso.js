import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const cursos = await req.context.models.Curso.findAll();
  return res.send(cursos);
});

router.get('/:cursoId', async (req, res) => {
  const curso = await req.context.models.Curso.findByPk(
    req.params.cursoId,
  );
  return res.send(curso);
});

router.post('/', async (req, res) => {
  const curso = await req.context.models.Curso.create({
    nome: req.body.nome,
    duracao: req.body.duracao,
    userId: req.context.me.id,
  });

  return res.send(curso);
});

router.delete('/:cursoId', async (req, res) => {
  const result = await req.context.models.Curso.destroy({
    where: { id: req.params.cursoId },
  });

  return res.send(true);
});

export default router;

