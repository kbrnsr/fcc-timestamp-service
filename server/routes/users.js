import express from 'express';

const router = express.Router();

/* GET users listing. */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, _next) => {
  res.send('respond with a resource');
});

export default router;
