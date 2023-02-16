const Product = require('../models/product');
const Card = require('../models/cart');

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products'
        })
    })
}

exports.getProduct = (req,res,next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.pageTitle,
            path: '/products'
        });
    });
};

exports.getIndex = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
      path: '/cart',
      pageTitle: 'Your Cart'
    });
  };

  exports.postCart = (req,res,next)=>{
    //in here we have to retrieve the prod id from incoming req
    //fetch the product in our database or file and add to cart

    const prodId = req.body.productId;

    Product.findById(prodId, (product)=>{
      Cart.addProduct(prodId, product.price)

    })
    res.redirect('/cart');
}
  
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