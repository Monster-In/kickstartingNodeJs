const fs = require('fs');
const path= require('path');

const p = path.join(path.dirname(require.main.filename),
'data','cart.json');

module.exports = class Cart{
    static addProduct(id,productPrice){
        //fetch the previous cart
        //analyse the cart =>find existing product
        //add new product/increase qnty
        fs.readFile(p,(err, fileContent) => {
            let cart = {products: [], totalPrice:0};
            if(!err){
                cart=JSON.parse(fileContent)
            }
            //analyse if the product exist
            const existingProductIndex =cart.products.findIndex(prod => prod.id===id);
            const existingProduct = cart.products[existingProductIndex];
            let updateProduct;
            if(existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qnty = updateProduct.qnty+1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updateProduct;
            }
            else{
                updatedProduct = {id:id,qnty:1}
                cart.products = [...cart.products, updateProduct];
            }
            cart.totalPrice = cart.totalPrice + productPrice;

            fs.writeFileSync(p,JSON.stringify(cart), err => {
                console.log(err);
            })
        })
    }


    static deleteProduct(id, productPrice){
        fs.readFile(p, (err, fileContent)=>{
          if(err){
            return;
          }
          const updatedCart = {...fileContent};
          const product = updatedCart.products.findIndex(prod => prod.id === id);
          const productQnty = product.qty;
          updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);
    
          updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQnty ;
          fs.writeFile(p, JSON.stringify(updatedCart), err => {
            console.log(err);
          });
        });
      }
}