const path = require('path');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongooose = require('mongoose');
const session = require('express-session');
const MongoDbStore = require('connect-mongodb-session')(session);

const MONGODB_URI =
  'mongodb+srv://database1:faker300301@cluster0.kquz5or.mongodb.net/data_asm3';

const User = require('./models/user');

const app = express();
const store = new MongoDbStore({
  uri: MONGODB_URI,
  collection: 'sessions',
});

const adminRoutes = require('./routes/admin');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use(adminRoutes);

mongooose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
