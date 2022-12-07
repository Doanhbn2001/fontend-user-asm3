const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
  Product.find().then((products) => {
    res.json({ products: products });
  });
};

exports.getDetailProduct = (req, res, next) => {
  Product.findById(req.params.productId).then((user) => {
    res.json({ user: user });
  });
};

exports.getProducts = (req, res, next) => {
  const categoryQuery = req.query.category;
  const search = req.query.search ? req.query.search : '';

  Product.find()
    .then((products) => {
      const productsQuery = products.filter((p) => {
        return p.category === categoryQuery && p.name.includes(search);
      });
      res.json({ products: productsQuery });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCarts = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then((user) => {
      const products = user.cart.items;
      res.json({ products: products });
    })
    .catch((err) => {
      console.log(err);
    });
};
