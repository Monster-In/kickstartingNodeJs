const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products =>{
    res.render('shop/product-list', {
    prods: products,
    pageTitle: 'All products',
    path: '/products'
  });
}).catch(err=>{
    console.log(err);
});

};

//note findById is replace by findByPk
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId).then(([product])=>{
  Product.findByPk(prodId)
  .then(product=>{
    res.render('shop/product-detail', {
      product: product[0],
      product: product,
      pageTitle: product.title,
      path: '/products'
    });

  }).catch(err=>console.log(err));
  }).catch(err=>{
    console.log(err);
  });
};

exports.getIndex = (req, res, next) => {
  Product.findAll().then(products =>{
      res.render('shop/index', {
      prods: rows,
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch(err=>{
    console.log(err);
      console.log(err);
  });

};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
    });
  };

exports.postCart = (req,res,next)=>{
    //in here we have to retrieve the prod id from incoming req
    //fetch the product in our database or file and add to cart
  const prodId = req.body.productId;
  Product.findById(prodId, (product)=>{
    Cart.addProduct(prodId, product.price)
  });
  res.redirect('/cart');
}

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

  
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};
  
exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};