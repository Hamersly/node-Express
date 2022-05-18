const express = require('express');
const createPath = require('./helpers/create-path');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const methodOverride = require('method-override')
const postRouter = require('./routes/post-routes')
const contactRouter = require('./routes/contacts-routes')
const apiPostRouter = require('./routes/api-post-routes')

const app = express();

app.set('view engine', 'ejs')

mongoose
  .connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to db'))
  .catch((error) => console.log(error) )


app.listen(process.env.PORT, error => {
  error ? console.log(error) : console.log(`listening port ${process.env.PORT}`);
})

app.use(express.urlencoded({extended: false}));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.urlencoded({extended: false}));

app.use(express.static('styles'));

app.use(methodOverride('_method'));


app.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), {title});
})

app.use(postRouter);
app.use(apiPostRouter);
app.use(contactRouter);

app.get('/about-us', (req, res) => {
  res.redirect('/about-us', { title });
})

app.use((req, res) => {
  res
    .status(404)
    .render(createPath('error'))
})

