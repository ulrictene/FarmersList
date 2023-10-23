class cart {
    constructor( product,total) {
        this.product = [];
        this.total = 0;
    }
    addProduct() {
        const addProduct =  this.product.push(product);
                this.total += addProduct;
    }
    removeProduct(i) {
        if ( >= 0 && i < this.product.length) {
            const removeProduct = this.product.splice(i,1)[0];
            this.total -= removeProduct;
        }
    }
}
module.exports = {Cart} ;