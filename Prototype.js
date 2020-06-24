class Prototype {
  clone() {
    return Object.create(this);
  }
};

const p1 = new Prototype();
const p2 = p1.clone();
console.log(p2.__proto__ === p1); // true
