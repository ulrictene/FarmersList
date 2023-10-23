class Auth {
    constructor()
    this.customer = [];
}
register(name,email,shippingAddress) {
    const newCustomer = new Customer(name, email, shippingAddress);
    this.customer.push(newCustomer);
}
login(email){
    const customer = this.customer.find((c)=> c.email === email);
    return customer;
}




module.exports = {Auth} ;
