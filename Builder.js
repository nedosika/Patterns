class Builder {
  constructor(){
    this.product = new Product();
  }

  producePartA(){
    this.product._parts.push('PartA')
  }

  producePartB(){
    this.product._parts.push('PartB')
  }

  producePartC(){
    this.product._parts.push('PartC')
  }

  getProduct(){
    return this.product;
  }
}

class Product{
  constructor(){
    this._parts = [];
  }
  listParts(){
    this._parts.forEach(part => console.log(part))
  }
}

const b = new Builder();
b.producePartA();
b.producePartC();

console.log(b.getProduct().listParts());
