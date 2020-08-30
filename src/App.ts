import express, { Router } from 'express';

const app = express();

const router = Router();
router.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use('/', router);

export default app;
