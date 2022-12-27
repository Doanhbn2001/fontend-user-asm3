const Product = require('../models/product');
const Order = require('../models/order');

const nodemailer = require('nodemailer');

const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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',
    },
  })
);

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
      // console.log(products);
      res.json({ products: products });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postCart = (req, res, next) => {
  // console.log(req.query);
  const count = req.query.count;
  const proId = req.query.idProduct;
  Product.findById(proId)
    .then((product) => {
      return req.user.addToCart(product, count);
    })
    .then(() => {
      res.json({ ok: true });
    })
    .then((err) => {
      console.log(err);
    });
};

exports.updateCart = (req, res, next) => {
  const idProduct = req.query.idProduct;
  const count = req.query.count;
  req.user
    .updateCart(idProduct, count)
    .then(() => {
      res.json({ ok: true });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteCart = (req, res, next) => {
  const idProduct = req.query.idProduct;
  req.user
    .deleteCartItem(idProduct)
    .then(() => {
      res.json({ ok: true });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEmail = (req, res, next) => {
  const email = req.query.to;
  // const fullName: req.query.fullname;
  // transporter.sendMail({
  //   to: 'doanh2001bn@gmail.com',
  //   from: 'doanh2001bn@gmail.com',
  //   subject: `Xin chao ${req.query.fullname}`,
  //   text: 'Hello world!', // plain text body
  //    html: `<b>Hello world!</b> <h1>${req.query.phone}<h1> <img src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_2.jpeg?alt=media&token=2e8b6c8e-56fa-4cfd-86c4-9be2ee6205e0"/>`, // html body
  // });
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then((user) => {
      const productsarr = [];
      let total = 0;
      user.cart.items.forEach((i) => {
        productsarr.push({ quantity: i.quantity, product: i.productId._doc });
      });
      productsarr.forEach((p) => {
        total += p.quantity * Number(p.product.price);
      });
      const order = new Order({
        total: total,
        name: req.query.fullname,
        phone: req.query.phone,
        address: req.query.address,
        products: productsarr,
        userId: req.user,
      });
      return order.save();
    })
    .then(() => {
      req.user.clearCart();
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getOrders = (req, res, next) => {
  const userId = req.user._id;
  Order.find({ userId: userId }).then((orders) => {
    // console.log(orders);
    res.json({ orders: orders });
  });
};

exports.getDetailOrder = (req, res, next) => {
  // console.log(req.params);
  const orderId = req.params.id;
  Order.findById(orderId).then((order) => {
    // console.log(order);
    res.json({ order: order });
  });
};
