import express from 'express';

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/:date', (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  const { date } = req.params;
  // eslint-disable-next-line no-console
  console.log(req.params);

  res.json({ unix: 'derp' });
});

/* GET home page. */
// eslint-disable-next-line
router.get('/', function(req, res, next) {
  res.send('Excellent');
});

export default router;
