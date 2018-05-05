const express = require('express');
const app = express();
const morgan = require('morgan');

const apiRouter = require('./apiRouter');

app.set('port', process.env.API_PORT || 4000);
app.disable('etag');
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/api/', apiRouter);

app.listen(app.get('port'), (err) => {
  if (err) {
    console.log('Could not start server.')
  } else {
    console.log(`Server started at port ${app.get('port')}`)
  }
});