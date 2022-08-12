import express from 'express';

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/:date', (req, res, next) => {
  const dateParam = req.params.date;
  let date;
  if (Number.isInteger(parseInt(dateParam, 10))) {
    date = new Date(parseInt(dateParam, 10));
  } else {
    date = new Date(dateParam);
  }

  const dateMilliSeconds = date.getTime();
  // error checking here
  // end error checking

  res.json({ unix: dateMilliSeconds });
});

/* GET home page. */
// eslint-disable-next-line
router.get('/', function(req, res, next) {
  res.send('Excellent');
});

export default router;
