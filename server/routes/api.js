import express from 'express';

const router = express.Router();

router.get('/:date', (req, res) => {
  const dateParam = req.params.date;
  let date;
  if (Number.isInteger(Number(dateParam))) {
    date = new Date(Number(dateParam));
  } else {
    date = new Date(dateParam);
  }
  if (Number.isNaN(date.getTime())) {
    return res.status(400).json({ error: 'Invalid Date' });
  }

  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

router.get('/', (req, res) => {
  const date = new Date();
  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

export default router;
