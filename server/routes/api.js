import express from 'express';

const router = express.Router();

/* GET home page. */
// eslint-disable-next-line
router.get('/', function(req, res, _next) {
  res.send('Excellent');
});

export default router;