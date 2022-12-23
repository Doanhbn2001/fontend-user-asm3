const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  role: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  fullname: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          require: true,
          ref: 'Product',
        },
        quantity: { type: Number, require: true },
      },
    ],
  },
});

userSchema.methods.addToCart = function (product, count) {
  const cartProduct = this.cart.items.findIndex((cb) => {
    return cb.productId.toString() === product._id.toString();
  });

  let newQuantity = count;
  const updatedCartItem = [...this.cart.items];
  if (cartProduct >= 0) {
    newQuantity = this.cart.items[cartProduct].quantity + count;
    updatedCartItem[cartProduct].quantity = newQuantity;
  } else {
    updatedCartItem.push({ productId: product._id, quantity: newQuantity });
  }

  const updatedCart = {
    items: updatedCartItem,
  };
  this.cart = updatedCart;
  return this.save();
};

userSchema.methods.updateCart = function (idProduct, count) {
  const cartProduct = this.cart.items.findIndex((cb) => {
    return cb.productId.toString() === idProduct.toString();
  });
  const updatedCartItem = [...this.cart.items];
  updatedCartItem[cartProduct].quantity = count;
  const updatedCart = {
    items: updatedCartItem,
  };
  this.cart = updatedCart;
  return this.save();
};

userSchema.methods.deleteCartItem = function (proId) {
  const updatedItems = this.cart.items.filter((item) => {
    return item.productId.toString() !== proId.toString();
  });
  this.cart.items = updatedItems;
  return this.save();
};

userSchema.methods.clearCart = function () {
  this.cart = { items: [] };
  return this.save();
};

module.exports = mongoose.model('User', userSchema);
