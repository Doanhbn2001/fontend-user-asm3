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
  const id = req.query.id;
  User.find()
    .then((users) => {
      const pro = [];
      users.forEach((u) => {
        u.cart.items.forEach((i) => {
          pro.push(i.productId.toString());
        });
      });
      // console.log(pro);
      return pro;
    })
    .then((pro) => {
      // console.log(id);
      if (pro.includes(id)) {
        res.json({ ok: false });
      } else {
        Product.findByIdAndRemove(id).then(() => {
          res.json({ ok: true });
        });
      }
    });
};

exports.getProduct = (req, res, next) => {
  const id = req.params.id;
  Product.findById(id)
    .then((product) => {
      if (!product) {
        res.json({ error: true });
      } else {
        res.json({ product: product });
      }
    })
    .catch((err) => {
      res.json({ error: true });
    });
};

exports.updateProduct = (req, res, next) => {
  const id = req.params.id;
  const product = req.body;
  User.find()
    .then((users) => {
      const pro = [];
      users.forEach((u) => {
        u.cart.items.forEach((i) => {
          pro.push(i.productId.toString());
        });
      });
      return pro;
    })
    .then((pro) => {
      // console.log(id);
      if (pro.includes(id)) {
        res.json({ ok: false });
      } else {
        Product.findByIdAndUpdate({ _id: id }, product)
          .then(() => {
            res.json({ ok: true });
          })
          .catch((err) => {
            res.json({ ok: false });
          });
      }
    });
};
