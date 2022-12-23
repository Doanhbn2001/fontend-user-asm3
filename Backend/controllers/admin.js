const User = require('../models/user');
const bcrypt = require('bcryptjs');
const Product = require('../models/product');

exports.signIn = (req, res, next) => {
  //   console.log(req.session);
  User.findOne({ email: req.body.email })
    .then((admin) => {
      //   console.log(admin);
      if (!admin) {
        return res.json({ errorEmail: true });
      } else {
        if (admin.role !== 'admin') {
          return res.json({ errorEmail: true });
        }
        bcrypt.compare(req.body.password, admin.password).then((doMatch) => {
          if (!doMatch) {
            return res.json({ errorPassword: true });
          } else {
            req.session.adminId = admin._id;
            return res.json({ admin: admin });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProducts = (req, res, next) => {
  Product.find().then((products) => {
    // console.log(products);
    res.json({ products: products });
  });
};

exports.deleteProduct = (req, res, next) => {
  console.log(req.query);
};
