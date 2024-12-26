
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    next();
  });
}
app.use(cors('*'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const trasferRoute = require('./routes/transfer-route');
const onrampRoute = require('./routes/buy-quote-route');

app.use('/transfer', trasferRoute);
app.use('/onramp', onrampRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});