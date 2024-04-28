import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const experiencias = await req.context.models.Experiencia.findAll();
  return res.send(experiencias);
});

router.get('/:experienciaId', async (req, res) => {
  const experiencia = await req.context.models.Experiencia.findByPk(
    req.params.experienciaId,
  );
  return res.send(experiencia);
});

router.post('/', async (req, res) => {
  const experiencia = await req.context.models.Experiencia.create({
    cargo: req.body.cargo,
    empresa: req.body.empresa,
    duracao: req.body.duracao,
    userId: req.context.me.id,
  });

  return res.send(experiencia);
});

router.delete('/:experienciaId', async (req, res) => {
  const result = await req.context.models.Experiencia.destroy({
    where: { id: req.params.experienciaId },
  });

  return res.send(true);
});

export default router;

