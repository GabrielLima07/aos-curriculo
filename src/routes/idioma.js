import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const idiomas = await req.context.models.Idioma.findAll();
  return res.send(idiomas);
});

router.get('/:idiomaId', async (req, res) => {
  const idioma = await req.context.models.Idioma.findByPk(
    req.params.idiomaId,
  );
  return res.send(idioma);
});

router.post('/', async (req, res) => {
  const idioma = await req.context.models.Idioma.create({
    lingua: req.body.lingua,
    nivel: req.body.nivel,
    userId: req.context.me.id,
  });

  return res.send(idioma);
});

router.delete('/:idiomaId', async (req, res) => {
  const result = await req.context.models.Idioma.destroy({
    where: { id: req.params.idiomaId },
  });

  return res.send(true);
});

export default router;

