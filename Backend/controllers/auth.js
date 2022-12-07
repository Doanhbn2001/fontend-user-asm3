const User = require('../models/user');

const bcrypt = require('bcryptjs');

exports.getAllData = (req, res, next) => {
  User.find()
    .then((users) => {
      res.json({ users: users });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.signup = (req, res, next) => {
  // console.log('f1', req.session.userId);
  const email = req.query.email;
  const password = req.query.password;
  const fullname = req.query.fullname;
  const phone = req.query.phone;
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res.json({ ok: false });
      }
      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            email: email,
            password: hashedPassword,
            fullname: fullname,
            phone: phone,
            cart: { items: [] },
          });
          return user.save();
        })
        .then(() => {
          res.json({ ok: true });
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.signin = (req, res, netx) => {
  req.session.userId = req.body._id;
  res.json({ ok: true });
};

exports.logout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
  });
  res.clearCookie('connect.sid');
  res.json({ ok: true });

  // console.log(req.session);
};
