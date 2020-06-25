class Factory {
  static produce(product){
    switch(product){
      case 'product1':
        return new Product1();
      case 'product2':
        return new Product2();
      default: return new Product1();
    }
  }
}

class Product1{
  constructor(){
    this._name='Product1';
  }
  getName(){
    return this._name;
  }
}

class Product2{
  constructor(){
    this._name='Product2';
  }
  getName(){
    return this._name;
  }
}

const products = [
  Factory.produce('product1'),
  Factory.produce('product2')
];

products.forEach((product) => console.log(product.getName()));
