const User = require('../models/user');

const bcrypt = require('bcryptjs');

exports.signin = (req, res, next) => {
  User.find()
    .then((users) => {
      res.json({ users: users });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.signup = (req, res, next) => {
  console.log(req.query);
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
