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
    return res.status(400).send('Bad request');
  }
  // error checking here
  // end error checking

  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

/* GET home page. */
// eslint-disable-next-line
router.get('/', function(req, res, next) {
  res.send('Excellent');
});

export default router;
