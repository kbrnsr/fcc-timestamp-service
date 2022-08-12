import express from 'express';

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/:date', (req, res, next) => {
  const dateParam = req.params.date;
  let date;
  if (Number.isInteger(Number(dateParam))) {
    date = new Date(Number(dateParam));
  } else {
    date = new Date(dateParam);
  }
  console.log(date.getTime());
  // error checking here
  // end error checking

  res.json({
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
